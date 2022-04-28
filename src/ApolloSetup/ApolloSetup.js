import { ApolloClient, InMemoryCache } from "@apollo/client";


export default new ApolloClient({
  uri: "https://mxtie861gj.execute-api.us-west-2.amazonaws.com/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/graphsql",
    "X-API-KEY": "g_L_cS7AYrIlyTk8O5Ja4Qv9j_dd6_bdUI08hMd-",
  },
});