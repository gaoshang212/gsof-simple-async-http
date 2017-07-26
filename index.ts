import * as request from 'request'

export interface options {
    method?: string
    params?: any;
}

export class http {

    public static request(uri: string, options?: options): Promise<string> {

        let opts: request.CoreOptions = {};
        let method = options && options.method;
        let params = options && options.params;;
        if (method) {
            opts.method = method;
        }

        let isPost = method && method.toLowerCase() === 'post';
        if (isPost) {
            opts.formData = params;
        } else {
            opts.qs = params;
        }

        let promise = new Promise<string>((resolve, reject) => {
            request(uri, opts, (err, rep, body) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(body);
            })
        });

        return promise;
    }

    public static async json(uri: string, options?: options): Promise<any> {
        let body = await http.request(uri, options);
        return JSON.parse(body);
    }
}