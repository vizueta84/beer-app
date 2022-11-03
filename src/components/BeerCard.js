import React, { useState } from "react";
import Heart from "react-heart";

export default function BeerCard(props) {
  const { beer, name, ibu, abv, image_url } = props;
  const [isClick, setClick] = useState(false);
  return (
    <div>
      <p>{name}</p>
      <div style={{ width: "2rem" }}>
        <Heart isActive={isClick} onClick={() => setClick(!isClick)} />
      </div>
      <img src={image_url} width={50} />
      <p>{`ibu: ${ibu} | abv: ${abv}`}</p>
    </div>
  );
}
