export interface options {
    method?: string;
    params?: any;
    headers?: any;
    gzip?: boolean;
}
export declare class http {
    static request(uri: string, options?: options): Promise<string>;
    static json(uri: string, options?: options): Promise<any>;
}
