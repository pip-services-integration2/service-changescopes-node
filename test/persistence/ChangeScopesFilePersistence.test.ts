import { ConfigParams } from 'pip-services3-commons-nodex';

import { ChangeScopesFilePersistence } from '../../src/persistence/ChangeScopesFilePersistence';
import { ChangeScopesPersistenceFixture } from './ChangeScopesPersistenceFixture';

suite('ChangeScopesFilePersistence', ()=> {
    let persistence: ChangeScopesFilePersistence;
    let fixture: ChangeScopesPersistenceFixture;
    
    setup(async () => {
        persistence = new ChangeScopesFilePersistence('./data/change_scopes.test.json');

        fixture = new ChangeScopesPersistenceFixture(persistence);
        
        await persistence.open(null);
        await persistence.clear(null);
    });
    
    teardown(async () => {
        await persistence.close(null);
    });
        
    test('Get and change', async () => {
        await fixture.testGetAndChange();
    });

});