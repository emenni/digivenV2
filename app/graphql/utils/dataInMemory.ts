export function createI18n<T extends Object>(I18nClass: new () => T, i18nData: Partial<T>): T {

    const instance = new I18nClass();

    return Object.assign(instance, i18nData) as T;
}
