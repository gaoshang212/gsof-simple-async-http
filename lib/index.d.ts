import { Response } from 'node-fetch';
export interface options {
    method?: string;
    params?: any;
    headers?: any;
    gzip?: boolean;
}
export declare class http {
    static request(uri: string, options?: options): Promise<Response>;
    static json<T>(uri: string, options?: options): Promise<T>;
}
