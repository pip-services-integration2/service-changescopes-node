"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.ChangeScopesLambdaFunction = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
const ChangeScopesServiceFactory_1 = require("../build/ChangeScopesServiceFactory");
class ChangeScopesLambdaFunction extends pip_services3_aws_nodex_1.CommandableLambdaFunction {
    constructor() {
        super("change_scopes", "Change scopes function");
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'controller', 'default', '*', '*'));
        this._factories.add(new ChangeScopesServiceFactory_1.ChangeScopesServiceFactory());
    }
}
exports.ChangeScopesLambdaFunction = ChangeScopesLambdaFunction;
exports.handler = new ChangeScopesLambdaFunction().getHandler();
//# sourceMappingURL=ChangeScopesLambdaFunction.js.map