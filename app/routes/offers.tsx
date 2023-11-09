
import { json } from "@remix-run/node";
import { gql } from "@apollo/client/index.js";
import { graphQLClient } from "~/lib/apollo/graphqlClient";
import { useLoaderData } from "@remix-run/react";

const query = gql`
query GetOffers {
  offers {
    ptBR {
        type
        name
        description        
    }
  }
}
`;

export async function loader() {
    const { data } = await graphQLClient.query({
        query,
    });

    return json({ offers: data.offers });
}

export default function Offers() {
    const { offers } = useLoaderData<typeof loader>();
    return (
        <div>{JSON.stringify(offers)}</div>
    );
}