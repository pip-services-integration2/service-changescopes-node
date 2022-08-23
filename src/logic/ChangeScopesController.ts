import { ConfigParams } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { DependencyResolver } from 'pip-services3-commons-nodex';
import { ICommandable } from 'pip-services3-commons-nodex';
import { CommandSet } from 'pip-services3-commons-nodex';

import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';
import { IChangeScopesPersistence } from '../persistence/IChangeScopesPersistence';
import { IChangeScopesController } from './IChangeScopesController';
import { ChangeScopesCommandSet } from './ChangeScopesCommandSet';

export class ChangeScopesController implements ICommandable, IConfigurable, IReferenceable, ICommandable, IChangeScopesController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'service-changescopes:persistence:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(ChangeScopesController._defaultConfig);
    private _persistence: IChangeScopesPersistence;
    private _commandSet: ChangeScopesCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<IChangeScopesPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new ChangeScopesCommandSet(this);
        return this._commandSet;
    }

    public async getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let item = await this._persistence.getOneById(correlationId, id);

        if (item == null) {
            item = <ChangeScopeV1>{
                id: id,
                change_time: new Date(0),
                elements: {}
            };
        }

        return item;
    }
    
    public async changeScope(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let item = await this._persistence.change(correlationId, id);

        if (item == null) {
            item = <ChangeScopeV1>{
                id: id,
                change_time: new Date(),
                elements: {}
            };
        }
        return item;
    }

    public async changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1> {
        let item = await this._persistence.changeElement(correlationId, id, element);

        if (item == null) {
            item = <ChangeScopeV1>{
                id: id,
                change_time: new Date(),
                elements: {}
            };
            item.elements[element] = item.change_time;
        }
        return item;
    }
    
    public async deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        return await this._persistence.deleteById(correlationId, id);
    }

}
