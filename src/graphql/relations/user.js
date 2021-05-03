import { CartTC, UserTC, OrderTC } from "../../models";

UserTC.addRelation("cart", {
  resolver: () => CartTC.getResolver("findMany"),
  prepareArgs: {
    filter: (source) => ({ customerId: source._id }),
    // _id: (source) => ({ customerId: source._id }),
  },
  projection: { _id: 1 },
});

UserTC.addRelation("order", {
  resolver: () => OrderTC.getResolver("findMany"),
  prepareArgs: {
    filter: (source) => ({ customerId: source._id }),
    // _id: (source) => ({ customerId: source._id }),
  },
  projection: { _id: 1 },
});
