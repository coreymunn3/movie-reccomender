import { DataAPIClient } from "@datastax/astra-db-ts";

const { ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_API_ENDPOINT } = process.env;

if (!ASTRA_DB_API_ENDPOINT || !ASTRA_DB_APPLICATION_TOKEN) {
  // throw new Error("Missing Astra creds");
}

// initialize the cline and get the DB obj to use throughout the app
const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN, {
  httpOptions: {
    client: "fetch",
  },
});

const db = client.db(ASTRA_DB_API_ENDPOINT);
console.log(`Connected to DB ${db.id}`);

export default db;
