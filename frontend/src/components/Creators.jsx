import React, { useEffect, useState } from "react";
import axios from "axios";

import { CreatorsContainer } from "../styledComponents/styledComps";
import { Creator } from "./Creator";

export const Creators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const runAsyncFunction = async () => {
      try {
        const { data } = await axios(
          "http://localhost:5000/creators"
        );

        setCreators(data);
      } catch (error) {
        console.log(error);
      }
    };

    runAsyncFunction();
  }, []);

  return (
    <CreatorsContainer id="CreatorsContainer">
      {creators.map((item, index) => (
        <Creator key={index} {...item} />
      ))}
    </CreatorsContainer>
  );
};
