/**
 * This function uses a simple HTTP client called Request to perform an API request.
 * Source: https://github.com/request/request
 */
import * as request from 'request';
import { Callback as ICallback } from '../interfaces/Callback';

/**
 * Gets a JSON object from an API provided by the baseUrl. QueryOptions can be included to modify the API request.
 * @param baseUrl 
 * @param callback 
 * @param queryOptions 
 */
export function getJSON(baseUrl: string, callback: ICallback, queryOptions?: string) {
    let urlWithOptions: any;

    /**
     * If queryOptions is given as a parameter, add it to the url.
     * JSON is set to true to guarantee we receive a JSON object from the API.
     */
    if (queryOptions) {
        urlWithOptions = {
            uri: baseUrl + queryOptions,
            json: true
        }
    } else {
        urlWithOptions = {
            uri: baseUrl,
            json: true
        }
    }

    request.get(urlWithOptions, (error: any, response: any, body: any) => {
        if (error) {
            callback(new Error(error));
        }

        callback(body);
    });
}