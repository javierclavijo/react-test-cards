/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import axios from "axios";
import { nanoid } from "nanoid";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { CardEntity } from "./entities/CardEntity";
import { CatEntity } from "./entities/CatEntity";
import { Colors } from "./styles/ts/constants";
import CardForm from "./views/CardForm";
import CardList from "./views/CardList";
import Home from "./views/Home";

function App() {
  const [cards, setCards] = React.useState<CardEntity[]>([]);

  React.useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get<CatEntity[]>(
        "https://api.thecatapi.com/v1/images/search?limit=1"
      );

      const catEntity = response.data.at(0);
      if (catEntity) {
        const newCard: CardEntity = {
          firstName: catEntity.id,
          url: catEntity.url,
          id: nanoid(),
        };

        setCards([newCard]);
      }
    };

    fetchCards();
  }, [setCards]);

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Header />
      <main css={main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cards"
            element={<CardList cards={cards} setCards={setCards} />}
          />
          <Route
            path="/form"
            element={<CardForm cards={cards} setCards={setCards} />}
          />
        </Routes>
      </main>
    </React.Fragment>
  );
}

const main = css`
  padding: 1.5rem 3rem;
`;

const globalStyles = css`
  html {
    background-color: ${Colors.WHITE};
  }

  * {
    color: ${Colors.BLACK};
  }
`;

export default App;
