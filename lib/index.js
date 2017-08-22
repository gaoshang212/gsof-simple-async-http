"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class http {
    static request(uri, options) {
        let opts = {};
        let method = options && options.method;
        let params = options && options.params;
        let headers = options && options.headers;
        if (method) {
            opts.method = method;
        }
        if (headers) {
            opts.headers = headers;
        }
        if (options && options.gzip) {
            opts.gzip = options.gzip;
        }
        let isPost = method && method.toLowerCase() === 'post';
        if (isPost) {
            opts.formData = params;
        }
        else {
            opts.qs = params;
        }
        let promise = new Promise((resolve, reject) => {
            request(uri, opts, (err, rep, body) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(body);
            });
        });
        return promise;
    }
    static json(uri, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = yield http.request(uri, options);
            return JSON.parse(body);
        });
    }
}
exports.http = http;
//# sourceMappingURL=index.js.map