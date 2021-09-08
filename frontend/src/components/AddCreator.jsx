import React, { useEffect, useState } from "react";
import axios from "axios";

import { AddCreatorContainer } from "../styledComponents/styledComps";
import { Creators } from "./Creators";

export const AddCreator = () => {
  const [url, setUrl] = useState("");

  // useEffect(() => {
  //   const runAsyncFunction = async () => {
  //   };

  //   runAsyncFunction();
  // }, []);

  const handleOnSubmit = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/creators",
        { url }
      );
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddCreatorContainer id="AddCreatorContainer">
      <div>
        <h1>Setuptourist</h1>
        <h4>Add a new creator</h4>
        <input
          class="channel-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="paste YouTube url"
        />
        <button onClick={handleOnSubmit}>submit</button>
      </div>
      <Creators />
    </AddCreatorContainer>
  );
};
