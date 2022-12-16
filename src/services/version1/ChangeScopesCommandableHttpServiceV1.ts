import { Descriptor } from 'pip-services3-commons-nodex';
import { CommandableHttpService } from 'pip-services3-rpc-nodex';

export class ChangeScopesCommandableHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/change_scopes');
        this._dependencyResolver.put('controller', new Descriptor('service-changescopes', 'controller', 'default', '*', '1.0'));
    }
}