import { ChangeScopesMemoryPersistence } from '../../src/persistence/ChangeScopesMemoryPersistence';
import { ChangeScopesPersistenceFixture } from './ChangeScopesPersistenceFixture';

suite('ChangeScopesMemoryPersistence', ()=> {
    let persistence: ChangeScopesMemoryPersistence;
    let fixture: ChangeScopesPersistenceFixture;
    
    setup(async () => {
        persistence = new ChangeScopesMemoryPersistence();
        fixture = new ChangeScopesPersistenceFixture(persistence);
        
        await persistence.open(null);
    });
    
    teardown(async () => {
        await persistence.close(null);
    });
        
    test('Get and change', async () => {
        await fixture.testGetAndChange();
    });

});