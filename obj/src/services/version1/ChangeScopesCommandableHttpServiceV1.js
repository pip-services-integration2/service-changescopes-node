"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopesCommandableHttpServiceV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class ChangeScopesCommandableHttpServiceV1 extends pip_services3_rpc_nodex_1.CommandableHttpService {
    constructor() {
        super('v1/change_scopes');
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'controller', 'default', '*', '1.0'));
    }
}
exports.ChangeScopesCommandableHttpServiceV1 = ChangeScopesCommandableHttpServiceV1;
//# sourceMappingURL=ChangeScopesCommandableHttpServiceV1.js.map