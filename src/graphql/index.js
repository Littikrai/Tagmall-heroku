import { schemaComposer } from "graphql-compose";

import "./relations";
import * as queryFields from "./queries";
import * as mutationFields from "./mutations";
// const path = require("path");
// const fs = require("fs");

schemaComposer.Query.addFields(queryFields);
schemaComposer.Mutation.addFields(mutationFields);

// schemaComposer.addTypeDefs(`
// scalar Upload
// type File {
//   url: String!
// }

// type Mutation {
//   uploadFile(file: Upload!): File!
// }
// `);
// schemaComposer.addResolveMethods({
//   Mutation: {
//     uploadFile: async (_, { file }) => {
//       const { filename, mimetype, createReadStream } = await file;
//       const stream = createReadStream();
//       const pathName = path.join(_dirname, `/public/images/${filename}`);
//       await stream.pipe(fs.createWriteStream(pathName));
//       // Promisify the stream and store the file, then…
//       return {
//         url: `http://localhost:4000/images/${filename}`,
//       };
//     },
//   },
// });
// schemaComposer.add(GraphQLUpload);

const GQLSchema = schemaComposer.buildSchema();

export default GQLSchema;
