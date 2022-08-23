const restify = require('restify');
const assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { ChangeScopeV1 } from '../../../src/data/version1/ChangeScopeV1';
import { ChangeScopesMemoryPersistence } from '../../../src/persistence/ChangeScopesMemoryPersistence';
import { ChangeScopesController } from '../../../src/logic/ChangeScopesController';
import { ChangeScopesHttpServiceV1 } from '../../../src/services/version1/ChangeScopesHttpServiceV1';

let restConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ChangeScopesHttpServiceV1', ()=> {
    let service: ChangeScopesHttpServiceV1;

    let rest: any;

    suiteSetup(async () => {
        let persistence = new ChangeScopesMemoryPersistence();
        let controller = new ChangeScopesController();

        service = new ChangeScopesHttpServiceV1();
        service.configure(restConfig);

        let references: References = References.fromTuples(
            new Descriptor('service-changescopes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-changescopes', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-changescopes', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        await service.open(null);
    });
    
    suiteTeardown(async () => {
        await service.close(null);
    });

    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });

   
    test('Get and Change', async () => {
        let scope = await new Promise<any>((resolve, reject) => {
            rest.post('/v1/change_scopes/change_scope',
                {
                    id: '123'
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.isEmpty(scope.elements);

        scope = await new Promise<any>((resolve, reject) => {
            rest.post('/v1/change_scopes/change_scope_element',
                {
                    id: '123',
                    element: 'key1'
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1']);

        scope = await new Promise<any>((resolve, reject) => {
            rest.post('/v1/change_scopes/change_scope_element',
                {
                    id: '123',
                    element: 'key2'
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1', 'key2']);

        scope = await new Promise<any>((resolve, reject) => {
            rest.post('/v1/change_scopes/delete_scope_by_id',
                {
                    id: '123'
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        assert.isObject(scope);
        assert.equal('123', scope.id);

        scope = await new Promise<any>((resolve, reject) => {
            rest.post('/v1/change_scopes/get_scope_by_id',
                {
                    id: '123'
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        assert.isObject(scope);
        assert.equal('123', scope.id);
    });

});