"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopesProcess = void 0;
const pip_services3_container_nodex_1 = require("pip-services3-container-nodex");
const pip_services3_prometheus_nodex_1 = require("pip-services3-prometheus-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
const pip_services3_swagger_nodex_1 = require("pip-services3-swagger-nodex");
const ChangeScopesServiceFactory_1 = require("../build/ChangeScopesServiceFactory");
class ChangeScopesProcess extends pip_services3_container_nodex_1.ProcessContainer {
    constructor() {
        super("change_scopes", "Change scopes microservice");
        this._factories.add(new ChangeScopesServiceFactory_1.ChangeScopesServiceFactory);
        this._factories.add(new pip_services3_prometheus_nodex_1.DefaultPrometheusFactory);
        this._factories.add(new pip_services3_rpc_nodex_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_swagger_nodex_1.DefaultSwaggerFactory);
    }
}
exports.ChangeScopesProcess = ChangeScopesProcess;
//# sourceMappingURL=ChangeScopesProcess.js.map