import { useState } from "react";

const books = [
  {
    id: 1,
    title: "A Song of Ice and Fire",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/song-of-ice-and-fire.jpeg",
  },
  {
    id: 2,
    title: "The Name of the Wind",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/the-name-of-the-wind.jpeg",
  },
  {
    id: 3,
    title: "The Way of Kings",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/the-way-of-kings.png",
  },
  {
    id: 4,
    title: "The Lies of Locke Lamora",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/the-lies-of-locke-lamora.webp",
  },
  {
    id: 5,
    title: "Dune",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/dune.jpeg",
  },
  {
    id: 6,
    title: "Neuromancer",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/neuromancer.jpeg",
  },
  {
    id: 7,
    title: "Foundation",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/foundation.jpeg",
  },
  {
    id: 8,
    title: "Ender's Game",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/enders-game.jpg",
  },
  {
    id: 9,
    title: "The Girl with the Dragon Tattoo",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/the-girl-with-the-dragon-tattoo.jpeg",
  },
  {
    id: 10,
    title: "Gone Girl",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/gone-girl.jpeg",
  },
  {
    id: 11,
    title: "Harry Potter",
    imgSrc:
      "https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/search/harry-potter.jpeg",
  },
];

function Book({
  title,
  imgSrc,
}: {
  title: string;
  imgSrc: string;
}): JSX.Element {
  return (
    <div
      style={{
        width: "10rem",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      className=" nx-bg-black/[.05] dark:nx-bg-gray-50/10"
    >
      <h5
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.1em",
        }}
      >
        {title}
      </h5>
      <img
        alt={title}
        src={imgSrc}
        style={{ width: "auto", height: "8rem", margin: "auto" }}
      />
    </div>
  );
}

export function Search(): JSX.Element {
  const [searchText, setSearchText] = useState("");

  return (
    <div
      style={{
        margin: "1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <label
        htmlFor="searchInput"
        style={{ fontWeight: "bold", fontSize: "1.1em" }}
      >
        Search Books
      </label>
      <input
        id="searchInput"
        placeholder="Harry Potter"
        type="text"
        maxLength={70}
        style={{ width: "15rem" }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="nx-block nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current"
      />
      <h4 style={{ fontWeight: "bold", fontSize: "1.1em", marginTop: "1rem" }}>
        My Books
      </h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.65em",
        }}
      >
        {books
          .filter(({ title }) =>
            title
              .toLowerCase()
              .trim()
              .includes(searchText.toLowerCase().trim()),
          )
          .map(({ id, title, imgSrc }) => (
            <Book key={id} title={title} imgSrc={imgSrc} />
          ))}
      </div>
    </div>
  );
}
