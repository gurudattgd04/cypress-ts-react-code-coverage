import React from "react";
import styled from "styled-components";

const Header = styled.h4`
  margin-top: 1rem;
  text-align: center;
  color: #7be31a;
  font-size: 1.5rem;
  text-decoration: none;
`;

export function CardPreview(props: any) {
  const [isFront, setIsFront] = React.useState(true);
  function handleCardFlip() {
    setIsFront((current) => !current);
  }
  return (
    <div className={`tile ${isFront ? "" : "back"}`}>
      <Header className={`cardTerm ${isFront ? "" : "back"}`}>
        {isFront ? props.term : props.definition}
      </Header>
      <div className="cardButtons">
        <button
          type="button"
          className="tertiary"
          data-testid="tertiary"
          onClick={handleCardFlip}
        >
          {isFront ? "show back" : "show front"}
        </button>
        <div>
          <button type="button" className="secondary">
            edit
          </button>
          <button type="button" className="secondary danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
