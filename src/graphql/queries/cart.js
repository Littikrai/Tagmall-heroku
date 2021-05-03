import { CartModel, CartTC } from "../../models";

export const CartTCById = CartTC.getResolver("findById");
export const Cart = CartTC.getResolver("findMany");
