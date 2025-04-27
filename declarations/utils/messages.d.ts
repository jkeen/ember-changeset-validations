/**
 * Find and load messages module on consuming app. Defaults to addon messages.
 * To define a custom message map, invoke setMessages() somewhere in your app:
 *
 * @example
 * // app.js
 * import Application from '@ember/application';
 * import Resolver from 'ember-resolver';
 * import loadInitializers from 'ember-load-initializers';
 * import config from 'test-app/config/environment';
 * import { setMessages } from 'ember-changeset-validations';
 *
 * export default class App extends Application {
 *   modulePrefix = config.modulePrefix;
 *   podModulePrefix = config.podModulePrefix;
 *   Resolver = Resolver;
 * }
 *
 * loadInitializers(App, config.modulePrefix);
 * setMessages({
 *   inclusion: '[CUSTOM] {description} is not included in the list',
 * });
 *
 * @return {Object}
 */
export function getMessages(): Object;
export function setMessages(messages: any): void;
export const defaultMessages: {
    _regex: RegExp;
    defaultDescription: string;
    getDescriptionFor(attribute: string, context?: {
        description?: string;
    }): string;
    getMessageFor(type: string, context?: {}): string;
    formatMessage(message: string, context?: Record<string, unknown>): string;
    accepted: string;
    after: string;
    before: string;
    blank: string;
    collection: string;
    confirmation: string;
    date: string;
    email: string;
    empty: string;
    equalTo: string;
    even: string;
    exclusion: string;
    greaterThan: string;
    greaterThanOrEqualTo: string;
    inclusion: string;
    invalid: string;
    lessThan: string;
    lessThanOrEqualTo: string;
    notAnInteger: string;
    notANumber: string;
    odd: string;
    onOrAfter: string;
    onOrBefore: string;
    otherThan: string;
    phone: string;
    positive: string;
    multipleOf: string;
    present: string;
    singular: string;
    tooLong: string;
    tooShort: string;
    between: string;
    url: string;
    wrongLength: string;
} & {
    blank: string;
    present: string;
    getDescriptionFor(key?: string): string;
};
