import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4or7v6u11oy01w76jgs8318/master",
  cache: new InMemoryCache(),
});
