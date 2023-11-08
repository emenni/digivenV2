import { SchemaLink } from '@apollo/client/link/schema/index.js';

import { buildSchema } from 'type-graphql';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import path from 'path';
import { resolvers } from '../../graphql/resolvers'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}


function buildGraphQLSchema(dir?: string, filename?: string) {

  return buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(dir ?? '', filename ?? ''),
  });
}

export async function getGraphQLClient() {
  if (!graphQLClient) {
    const schema = await buildGraphQLSchema("./app/graphql", 'schema.graphql');
    graphQLClient = new ApolloClient({
      cache: new InMemoryCache(),
      ssrMode: true,
      link: new SchemaLink({ schema }),
    });
  }
  return graphQLClient;
}

// Export the client after initialization
export let graphQLClient: ApolloClient<unknown>;

// Ensure the client is initialized before exporting
async function init() {
  graphQLClient = await getGraphQLClient();
}

init().catch(error => {
  // Handle any initialization errors
  console.error('Error initializing GraphQL client:', error);
});

