// ./app/routes/books.tsx

import { json } from "@remix-run/node";
import { gql } from "@apollo/client/index.js";
import { graphQLClient } from "~/lib/apollo";
import { useLoaderData } from "@remix-run/react";

const query = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;


export async function loader() {
    const { data } = await graphQLClient.query({
        query,
    });
    return json({ books: data.books });
}

export default function Books() {
    const { books } = useLoaderData<typeof loader>();
    return (
        <main>
            <section>
                <h1>All books</h1>
                <ul>
                    {books.map(({ title, author }: { title: string; author: string }, index: number) => (
                        <li key={index}>
                            <h3>{title}</h3>
                            <p>{author}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}