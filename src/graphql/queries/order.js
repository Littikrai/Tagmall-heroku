import { OrderModel, OrderTC } from "../../models";

export const OrderTCById = OrderTC.getResolver("findById");
export const Order = OrderTC.getResolver("findMany");
