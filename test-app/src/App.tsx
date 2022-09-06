import axios from "axios";
import { nanoid } from "nanoid";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { CardEntity } from "./entities/CardEntity";
import { CatEntity } from "./entities/CatEntity";
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
      <header>
        <nav>
          <NavLink to="/form">Add a card</NavLink>
          <NavLink to="/cards">See all cards</NavLink>
        </nav>
      </header>
      <main>
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

export default App;
