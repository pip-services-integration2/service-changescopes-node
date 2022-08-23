import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';
import { IChangeScopesPersistence } from './IChangeScopesPersistence';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-nodex';

export class ChangeScopesMongoDbPersistence 
    extends IdentifiableMongoDbPersistence<ChangeScopeV1, string> 
    implements IChangeScopesPersistence {

    constructor() {
        super('change_scopes');
    }

    public convertToPublic(item: any): any {
        if (item) {
            item = super.convertToPublic(item);
            item.elements = item.elements || {};
        }
        return item;
    }

    public async change(correlationId: string, id: string): Promise<ChangeScopeV1> {

        let partial: any = {
            $set: {
                change_time: new Date()
            }
        }

        let result = await this._collection.findOneAndUpdate(
            { _id: id }, 
            partial, 
            { returnDocument: 'after', upsert: true }
        );

        this._logger.trace(correlationId, "Changed in %s by %s", this._collection, id);

        let newItem = result != null ? this.convertToPublic(result.value) : null;

        return newItem;
    }

    public async changeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1> {

        let now = new Date();
        let partial: any = {
            $set: {
                change_time: now
            }
            
        }
        partial['$set']['elements.' + element] = now;

        let result = await this._collection.findOneAndUpdate(
            { _id: id }, 
            partial, 
            { returnDocument: 'after', upsert: true }
        );

        this._logger.trace(correlationId, "Changed in %s by %s", this._collection, id);

        let newItem = result != null ? this.convertToPublic(result.value) : null;

        return newItem;
    }
}
