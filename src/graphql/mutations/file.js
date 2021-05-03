import { schemaComposer } from "graphql-compose";
import { GraphQLUpload } from "graphql-upload";
const path = require("path");
const fs = require("fs");

export const UploadType = schemaComposer.createObjectTC({
  name: "UploadType",
  fields: {
    url: "String!",
  },
});

export const uploadFile = schemaComposer.createResolver({
  name: "uploadFile",
  args: {
    image: {
      description: "Image file.",
      type: GraphQLUpload,
    },
  },
  type: UploadType,
  resolve: async (_, { image }) => {
    const { filename, mimetype, createReadStream } = await image;
    const stream = createReadStream();
    const pathName = path.join(_dirname, `/public/images/${filename}`);
    await stream.pipe(fs.createWriteStream(pathName));
    // Promisify the stream and store the file, then…
    return {
      url: `http://localhost:4000/images/${filename}`,
    };
  },
});
