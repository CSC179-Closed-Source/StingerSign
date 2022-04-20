import { ApolloClient, InMemoryCache } from "@apollo/client";


export default new ApolloClient({
  uri: "https://y2xkbmelkd.execute-api.us-west-2.amazonaws.com/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/graphsql",
    "X-API-KEY": "oZTLi7_6AhrXsRUoMKLep9--Z2r1hyp6-cTmwon8",
  },
});