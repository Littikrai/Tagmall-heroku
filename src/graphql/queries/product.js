import { ProductModel, ProductTC } from "../../models";

export const productById = ProductTC.getResolver("findById");

export const product = ProductTC.getResolver("findMany");
