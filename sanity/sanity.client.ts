import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ga8lllhf",
  dataset: "production",
  apiVersion: "2023-10-20",
  useCdn: false,
};

const client = createClient(config);

export default client;