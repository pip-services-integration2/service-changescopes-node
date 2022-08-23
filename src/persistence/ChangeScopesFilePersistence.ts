import { ConfigParams } from 'pip-services3-commons-nodex';
import { JsonFilePersister } from 'pip-services3-data-nodex';

import { ChangeScopesMemoryPersistence } from './ChangeScopesMemoryPersistence';
import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';

export class ChangeScopesFilePersistence extends ChangeScopesMemoryPersistence {
	protected _persister: JsonFilePersister<ChangeScopeV1>;

    public constructor(path?: string) {
        super();

        this._persister = new JsonFilePersister<ChangeScopeV1>(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
        this._persister.configure(config);
    }

}