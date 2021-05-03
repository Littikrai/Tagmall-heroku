import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const Product = new Schema({
  name: { type: String, required: true, index: true },
  media: { type: String, required: true },
  price: { type: Number, require: true },
  stock: { type: Number, require: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
});

export const ProductModel = mongoose.model("Product", Product);

export const ProductTC = composeWithMongoose(ProductModel);

export default ProductModel;
