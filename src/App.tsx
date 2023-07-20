import React from "react";
import "./App.css";
import "./normalize.css";
import "./App.css";
import { CardPreview } from "./components/CardPreview";
import { getCards } from "./services/cardService";
import styled from "styled-components";

const Heading = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
`;

function App() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    getCards().then(setCards);
  }, []);
  return (
    <div>
      <header>
        <Heading>
          Card<span className="titleHighlight">Flip</span>
        </Heading>
        <h2>Lets Get Lucky</h2>
      </header>
      <main>
        <h3>Your cards</h3>
        <div className="gridContainer">
          {cards.map(({ id, definition, term }) => (
            <CardPreview key={id} definition={definition} term={term} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
