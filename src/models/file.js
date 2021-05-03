import mongoose from "mongoose";

const { Schema } = mongoose;

const fileSchema = new Schema({
  filename: String,
  mimetype: String,
  path: String,
});
export default mongoose.model("File", fileSchema);
