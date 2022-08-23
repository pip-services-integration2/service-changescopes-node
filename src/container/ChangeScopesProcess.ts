import { ProcessContainer } from 'pip-services3-container-nodex';
import { DefaultPrometheusFactory } from 'pip-services3-prometheus-nodex';
import { DefaultRpcFactory } from 'pip-services3-rpc-nodex';
import { DefaultSwaggerFactory } from 'pip-services3-swagger-nodex';

import { ChangeScopesServiceFactory } from '../build/ChangeScopesServiceFactory';

export class ChangeScopesProcess extends ProcessContainer {

    public constructor() {
        super("change_scopes", "Change scopes microservice");
        this._factories.add(new ChangeScopesServiceFactory);
        this._factories.add(new DefaultPrometheusFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultSwaggerFactory);
    }
}
