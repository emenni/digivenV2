
import { json } from "@remix-run/node";
import { gql } from "@apollo/client/index.js";
import { graphQLClient } from "~/lib/apollo/graphqlClient";
import { useLoaderData } from "@remix-run/react";

const query = gql`
query GetConsent {
  consent {
    purecookieDesc
    purecookieTitle
    purecookieButton
    purecookieLink
  }
}
`;

export async function loader() {
  const { data } = await graphQLClient.query({
    query,
  });
  return json({ consent: data.consent });
}

export default function Consent() {
  const { consent } = useLoaderData<typeof loader>();
  return (
    <div>{JSON.stringify(consent)}</div>
  );
}