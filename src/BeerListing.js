import React from "react";

export default function BeerListing({ name, imageUrl }) {
  //   const someFunction = () => {}
  return (
    <div className="beer-listing">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
    </div>
  );
}
