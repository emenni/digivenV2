

import { Query, Resolver } from "type-graphql";
import i18n from "../data/i18n.data.json";
import { Offers } from "../types/i18n.type";
import { createI18n } from "../utils/dataInMemory";


@Resolver(_of => Offers)
export class OffersResolver {

    private readonly offerText: Offers = createI18n(Offers, i18n.offer);

    @Query(_returns => Offers)
    async offers(): Promise<Offers> {
        return this.offerText;
    }

}