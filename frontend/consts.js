const BACKEND_HOST = process.env.NODE_ENV === "development"
  ? "http://localhost:4000"
  : "https://api.baseql.com";
const APP_HOST = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://app.baseql.com";
const META_ENDPOINT = "/airtable/meta";
const GRAPHQL_ENDPOINT = "/airtable/graphql";

export {
  BACKEND_HOST,
  APP_HOST,
  META_ENDPOINT,
  GRAPHQL_ENDPOINT,
}