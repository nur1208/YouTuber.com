import React from "react";
import { CreatorsContainer } from "../styledComponents/styledComps";
import { Creator } from "./Creator";

export const Creators = () => {
  return (
    <CreatorsContainer id="CreatorsContainer">
      <Creator name="leo" image="/leo.jpg" />
    </CreatorsContainer>
  );
};
