import { ChangeScopeV1 } from '../data/version1/ChangeScopeV1';

export interface IChangeScopesController {
    getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;

    changeScope(correlationId: string, id: string): Promise<ChangeScopeV1>;

    changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;

    deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}
