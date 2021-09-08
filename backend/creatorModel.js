import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatarURL: { type: String, required: true },
    channelURL: String,
  },
  {
    timestamps: true,
  }
);

const Creator = mongoose.model("Creator", creatorSchema);
export default Creator;
