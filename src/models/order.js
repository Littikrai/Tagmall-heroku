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
const Order = new Schema({
  customerId: { type: String, require: true, index: true, ref: "User" },
  item: { type: [ItemSchema] },
  totalPrice: { type: Number },
  address: { type: String },
  createAt: { type: Date, default: Date.now },
});

export const OrderModel = mongoose.model("Order", Order);

export const OrderTC = composeWithMongoose(OrderModel);

export default OrderModel;
