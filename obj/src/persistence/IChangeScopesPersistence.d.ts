import { IGetter } from 'pip-services3-data-nodex';
import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';
export interface IChangeScopesPersistence extends IGetter<ChangeScopeV1, string> {
    getOneById(correlationId: string, id: string): Promise<ChangeScopeV1>;
    change(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;
    deleteById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}
