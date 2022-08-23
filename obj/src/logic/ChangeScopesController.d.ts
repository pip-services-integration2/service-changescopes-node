import { ConfigParams } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { ICommandable } from 'pip-services3-commons-nodex';
import { CommandSet } from 'pip-services3-commons-nodex';
import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';
import { IChangeScopesController } from './IChangeScopesController';
export declare class ChangeScopesController implements ICommandable, IConfigurable, IReferenceable, ICommandable, IChangeScopesController {
    private static _defaultConfig;
    private _dependencyResolver;
    private _persistence;
    private _commandSet;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getCommandSet(): CommandSet;
    getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScope(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;
    deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}
