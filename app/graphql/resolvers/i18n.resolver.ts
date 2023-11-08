import { Query, Resolver } from "type-graphql";
import i18n from "../data/i18n.data.json";
import { Consent } from "../types/i18n.type";


function createConsent(consentData: Partial<Consent>) {
    return Object.assign(new Consent(), consentData);
}

@Resolver(_of => Consent)
export default class ConsentResolver {

    private readonly consentText: Consent = createConsent(i18n.consent["pt-BR"]);

    @Query(_returns => Consent)
    async consent(): Promise<Consent> {
        return this.consentText;
    }

}

