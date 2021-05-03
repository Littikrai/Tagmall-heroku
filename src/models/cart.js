import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: { type: String },
  media: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  total: { type: Number },
});
const Cart = new Schema({
  customerId: { type: String, require: true, index: true, ref: "User" },
  item: { type: [ItemSchema] },
  totalPrice: { type: Number },
});

export const CartModel = mongoose.model("Cart", Cart);

export const CartTC = composeWithMongoose(CartModel);

export default CartModel;
