import { Query, Resolver } from "type-graphql";
import i18n from "../data/i18n.data.json";
import { Consent } from "../types/i18n.type";


function createI18n<T extends Object>(I18nClass: new () => T, i18nData: Partial<T>): T {
    const instance = new I18nClass();
    return Object.assign(instance, i18nData) as T;
}

@Resolver(_of => Consent)
export class ConsentResolver {

    private readonly consentText: Consent = createI18n(Consent, i18n.consent["pt-BR"]);

    @Query(_returns => Consent)
    async consent(): Promise<Consent> {
        return this.consentText;
    }
}





