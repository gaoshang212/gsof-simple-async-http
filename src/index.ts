import fetch, { RequestInit, Response } from 'node-fetch'
import * as qs from 'querystring';

export interface options {
    method?: string
    params?: any;
    headers?: any;
    gzip?: boolean;
}

export class http {

    public static async  request(uri: string, options?: options): Promise<Response> {

        let params = options && options.params;
        let opts: RequestInit = {
            method: options && options.method,
            headers: options && options.headers,
            compress: true && options && options.gzip,
        };

        let url = uri;
        if (opts.method === 'get') {
            url = `${uri}?${qs.stringify(options.params)}`;
        } else if (opts.method === 'post') {
            opts.body = qs.stringify(options.params);
            opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        return await fetch(url, opts);
    }

    public static async json<T>(uri: string, options?: options): Promise<T> {
        let body = await http.request(uri, options);
        return await body.json() as T;
    }

    public static async text(uri: string, options?: options): Promise<string> {
        let body = await http.request(uri, options);
        return await body.text();
    }
}