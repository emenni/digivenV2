import { ObjectType, Field, createUnionType } from "type-graphql";


@ObjectType({ description: "Object representing a Consent" })
export class Consent {
    @Field(_type => String, { description: "" })
    purecookieDesc!: string;

    @Field(_type => String, { description: "" })
    purecookieTitle!: string;

    @Field(_type => String, { description: "" })
    purecookieButton!: string;

    @Field(_type => String, { description: "" })
    purecookieLink!: string;
}

@ObjectType({ description: "Object representing an Offer" })
export class Offer {
    @Field(_type => String, { description: "" })
    id: string;
    @Field(_type => String, { description: "" })
    type: string;
    @Field(_type => String, { description: "" })
    name: string;
    @Field(_type => String, { description: "" })
    description: string;
    @Field(_type => String, { nullable: true, description: "" })
    image?: string;
}

@ObjectType({ description: "Object representing a PrivacyPolicySection" })
class PrivacyPolicySection {
    title: string;
    content: string[];
}

@ObjectType({ description: "Object representing a PrivacyPolicy" })
class PrivacyPolicy {
    @Field(_type => String, { description: "" })
    title: string;
    @Field(_type => PrivacyPolicySection, { description: "" })
    sections: PrivacyPolicySection[];
}

const SiteText = createUnionType({
    name: "siteText", // Name of the GraphQL union
    types: () => [Consent, Offer, PrivacyPolicy] as const, // function that returns tuple of object types classes
});

@ObjectType({ description: "Object representing i18n" })
export class I18n {
    @Field(_type => SiteText)
    "pt-BR"?: typeof SiteText;
    "en-US"?: typeof SiteText;

}


