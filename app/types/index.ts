interface Window {
  loadConsent: () => void;
}

interface AppProps {
  language?: Language | "",
  onClickFunction?: (buttonKey: string) => void | {},
  offer?: OfferItem[] | []
};

interface JSONLDProperties {
  "@type": string;
  position: number;
  name: string;
  description: string;
  image?: string;  // Make image property optional
  offers?: { "@type": string; "price": number; "priceCurrency": string } | null;
}