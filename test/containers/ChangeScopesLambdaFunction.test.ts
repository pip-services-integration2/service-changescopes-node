const assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-nodex';

import { ChangeScopesLambdaFunction } from '../../src/container/ChangeScopesLambdaFunction';

suite('ChangeScopesLambdaFunction', ()=> {
    let lambda: ChangeScopesLambdaFunction;

    suiteSetup(async () => {
        let config = ConfigParams.fromTuples(
            'logger.descriptor', 'pip-services:logger:console:default:1.0',
            'persistence.descriptor', 'service-changescopes:persistence:memory:default:1.0',
            'controller.descriptor', 'service-changescopes:controller:default:default:1.0'
        );

        lambda = new ChangeScopesLambdaFunction();
        lambda.configure(config);
        await lambda.open(null);
    });
    
    suiteTeardown(async () => {
        await lambda.close(null);
    });
    
    test('Get and Change', async () => {
        let scope = await lambda.act(
            {
                role: 'change_scopes',
                cmd: 'change_scope',
                id: '123'
            }
        );

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.isEmpty(scope.elements);

        scope = await lambda.act(
            {
                role: 'change_scopes',
                cmd: 'change_scope_element',
                id: '123',
                element: 'key1'
            }
        );

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1']);

        scope = await lambda.act(
            {
                role: 'change_scopes',
                cmd: 'change_scope_element',
                id: '123',
                element: 'key2'
            }
        );

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1', 'key2']);

        scope = await lambda.act(
            {
                role: 'change_scopes',
                cmd: 'delete_scope_by_id',
                id: '123'
            }
        );

        assert.isObject(scope);
        assert.equal('123', scope.id);
        
        scope = await lambda.act(
            {
                role: 'change_scopes',
                cmd: 'get_scope_by_id',
                id: '123'
            }
        );

        assert.isObject(scope);
        assert.equal('123', scope.id);
    });
});