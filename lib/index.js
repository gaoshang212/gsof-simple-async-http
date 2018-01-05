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
const node_fetch_1 = require("node-fetch");
const qs = require("querystring");
class http {
    static request(uri, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = options && options.params;
            let opts = {
                method: options && options.method,
                headers: options && options.headers,
                compress: true && options && options.gzip,
            };
            let url = uri;
            if (opts.method === 'get') {
                url = `${uri}?${qs.stringify(options.params)}`;
            }
            else if (opts.method === 'post') {
                opts.body = qs.stringify(options.params);
                opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            return yield node_fetch_1.default(url, opts);
        });
    }
    static json(uri, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = yield http.request(uri, options);
            return yield body.json();
        });
    }
    static text(uri, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = yield http.request(uri, options);
            return yield body.text();
        });
    }
}
exports.http = http;
//# sourceMappingURL=index.js.map