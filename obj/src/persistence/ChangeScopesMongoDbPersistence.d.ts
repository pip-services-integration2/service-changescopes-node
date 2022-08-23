import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';
import { IChangeScopesPersistence } from './IChangeScopesPersistence';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-nodex';
export declare class ChangeScopesMongoDbPersistence extends IdentifiableMongoDbPersistence<ChangeScopeV1, string> implements IChangeScopesPersistence {
    constructor();
    convertToPublic(item: any): any;
    change(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;
}
