import type { MetaFunction } from "@remix-run/node";
import i18n from "../graphql/data/i18n.data.json";
import type { Offer } from "../graphql/types/i18n.type";

export const meta: MetaFunction = () => {

  const offer = i18n.offer["pt-BR"] as Offer[];
  {
    const jsonLdData = {
      "@context": "http://schema.org",
      "@type": "ItemList",
      itemListElement: (offer || []).map((item, index) => {
        const itemProperties: JSONLDProperties = {
          "@type": item.type === "service" ? "Service" : "Product",
          position: index + 1,
          name: item.name,
          description: item.description
        };

        // Add image if it's defined
        if (item.image) {
          itemProperties.image = "https://www.digiven.com.br/static/" + item.image;
        }

        // Add offers if it's not a service
        if (item.type !== "service") {
          itemProperties.offers = { "@type": "Offer", "price": 0, "priceCurrency": "BRL" };
        }

        return itemProperties;
      }),
    };

    return [
      { title: "Digiven" },
      { name: "description", content: "Welcome to Digiven!" },
      { "script:ld+json": jsonLdData }
    ]
  }
}
export default function Index() {

  return (
    <div className="mainContainer">
      {/* <img src={digiVenLogo} className="logo" alt="DigiVen Logo" /> */}
      <div>

      </div>
    </div >
  );
}
