import React from "react";
import { CreatorContainer } from "../styledComponents/styledComps";

export const Creator = ({ name, image }) => {
  return (
    <CreatorContainer id="CreatorContainer">
      <h4>{name}</h4>
      <img src={image} alt={name} style={{ width: 100 }} />
    </CreatorContainer>
  );
};
