import { CartTC } from "../../models";

export const createCart = CartTC.getResolver("createOne");
export const updateCartById = CartTC.getResolver("updateById");
export const removeCartById = CartTC.getResolver("removeById");
