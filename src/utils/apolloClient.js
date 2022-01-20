import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import "dotenv/config";

const httpLink = createHttpLink({
  uri: "http://192.168.0.207:4000/graphql",
});
const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
