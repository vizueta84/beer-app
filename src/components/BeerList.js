import React from "react";
import BeerCard from "./BeerCard";
export default function BeerList(props) {
  console.log(props);
  return (
    <div>
      {props.beers.map((beer, index) => {
        return (
          <BeerCard
            beer={beer}
            name={beer.name}
            abv={beer.abv}
            ibu={beer.ibu}
            image_url={beer.image_url}
          />
        );
      })}
    </div>
  );
}
