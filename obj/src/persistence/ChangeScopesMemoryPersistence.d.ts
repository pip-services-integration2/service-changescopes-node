import { IdentifiableMemoryPersistence } from 'pip-services3-data-nodex';
import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';
import { IChangeScopesPersistence } from './IChangeScopesPersistence';
export declare class ChangeScopesMemoryPersistence extends IdentifiableMemoryPersistence<ChangeScopeV1, string> implements IChangeScopesPersistence {
    constructor();
    change(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;
}
