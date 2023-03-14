import React from "react";
import { Link } from "react-router-dom";

export default function Header({ text }) {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul>
        <li>
          <Link to="/moviestowatch">Movies to Watch</Link>
        </li>
        <p className="">{text}</p>
        <li>
          <Link to="/watchedmovies">Watched movies</Link>
        </li>
      </ul>
    </nav>
  );
}
