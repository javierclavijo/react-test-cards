/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Colors } from "../styles/ts/constants";

function Header() {
  return (
    <header css={header}>
      <h1>
        <Link to="/" css={title}>
          CardApp
        </Link>
      </h1>
      <nav css={nav}>
        <NavLink
          to="/form"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          Add a card
        </NavLink>
        <NavLink
          to="/cards"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          All cards
        </NavLink>
      </nav>
    </header>
  );
}

const header = css`
  padding: 1.375rem;
  background-color: ${Colors.PRIMARY};
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const title = css`
  margin: 0;
  font-size: 1.5rem;
  color: ${Colors.WHITE};
  text-decoration: none;
`;

const nav = css`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

const link: React.CSSProperties = {
  textDecoration: "none",
  color: Colors.WHITE,
  height: "100%",
  borderBottom: `2px solid ${Colors.WHITE}00`,
};

const activeLink: React.CSSProperties = {
  ...link,
  borderBottom: `2px solid ${Colors.WHITE}`,
};

export default Header;
