import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

/**
 * Card list component: This component will render all the monsters that it receives by mapping over the prop monsters and then call the Card component with the monster detail
 */
const CardList = (props) => {
   const { monsters } = props;
   return (
      <div className="card-list">
         {monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
         ))}
      </div>
   );
};

export default CardList;
