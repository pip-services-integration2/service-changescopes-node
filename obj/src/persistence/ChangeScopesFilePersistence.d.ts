import { ConfigParams } from 'pip-services3-commons-nodex';
import { JsonFilePersister } from 'pip-services3-data-nodex';
import { ChangeScopesMemoryPersistence } from './ChangeScopesMemoryPersistence';
import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';
export declare class ChangeScopesFilePersistence extends ChangeScopesMemoryPersistence {
    protected _persister: JsonFilePersister<ChangeScopeV1>;
    constructor(path?: string);
    configure(config: ConfigParams): void;
}
