import React from "react";
import { Creator } from "./Creator";
import { Creators } from "./Creators";

export const AddCreator = () => {
  return (
    <div>
      <h1>Setuptourist</h1>
      <h4>Add a new creator</h4>
      <input
        class="channel-input"
        type="text"
        placeholder="paste YouTube url"
      />
      <button type="submit" onclick="submitChannel()">
        submit
      </button>
      <Creators />
    </div>
  );
};
