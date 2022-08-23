import { Descriptor } from 'pip-services3-commons-nodex';
import { CommandableLambdaFunction } from 'pip-services3-aws-nodex';

import { ChangeScopesServiceFactory } from '../build/ChangeScopesServiceFactory';
import { DefaultRpcFactory } from 'pip-services3-rpc-nodex';

export class ChangeScopesLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("change_scopes", "Change scopes function");
        this._dependencyResolver.put('controller', new Descriptor('service-changescopes', 'controller', 'default', '*', '*'));
        this._factories.add(new ChangeScopesServiceFactory());
    }
}

export const handler = new ChangeScopesLambdaFunction().getHandler();