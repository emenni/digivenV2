import { Query, Resolver } from "type-graphql";
import i18n from "../data/i18n.data.json";
import { Consent, Offers } from "../types/i18n.type";


function createI18n<T extends Object>(I18nClass: new () => T, i18nData: Partial<T>): T {
    const instance = new I18nClass();
    return Object.assign(instance, i18nData) as T;
}

@Resolver(_of => Consent)
export class ConsentResolver {

    private readonly i18nText: Consent = createI18n(Consent, i18n.consent["pt-BR"]);

    @Query(_returns => Consent)
    async consent(): Promise<Consent> {
        return this.i18nText;
    }
}

@Resolver(_of => Offers)
export class OffersResolver {

    private readonly i18nText: Offers = createI18n(Offers, i18n.offer["pt-BR"]);

    @Query(_returns => Offers)
    async offer(): Promise<Offers> {
        return this.i18nText;
    }

}

