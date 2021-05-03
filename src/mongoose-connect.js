import mongoose from "mongoose";

mongoose.Promise = Promise;
mongoose.connect("mongodb://127.0.0.1:27017", {
  dbName: "mytTag",
  // user: "user",
  // pass: "pass",
  promiseLibrary: Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
