const assert = require('chai').assert;

import { IChangeScopesPersistence } from '../../src/persistence/IChangeScopesPersistence';

export class ChangeScopesPersistenceFixture {
    private _persistence: IChangeScopesPersistence;
    
    constructor(persistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }

    public async testGetAndChange() {
        let scope = await this._persistence.change(null, '123');

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.isEmpty(scope.elements);

        scope = await this._persistence.changeElement(null, '123', 'key1');

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1']);

        scope = await this._persistence.changeElement(null, '123', 'key2');

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1', 'key2']);

        scope = await this._persistence.deleteById(null, '123');

        assert.isObject(scope);
        assert.equal('123', scope.id);

        scope = await this._persistence.getOneById(null, '123');

        assert.isNull(scope);
    }    

}
