# Change Scopes Microservice

This is a change scope microservice from Pip.Services library. 
It detects changes made in a particular scope or element of a scope.

This microservice is intended to implement change detection using
simple pull mechanism. For instance: multiple configuration microservices
change the scope, and business logic that depends on those configurations
periodically reads it to check if anything was changed.

The microservice currently supports the following deployment options:
* Deployment platforms: Standalone Process, Seneca
* External APIs: HTTP/REST, Seneca
* Persistence: Flat Files, MongoDB

This microservice has no dependencies on other microservices.

<a name="links"></a> Quick Links:

* [Download Links](doc/Downloads.md)
* [Development Guide](doc/Development.md)
* [Configuration Guide](doc/Configuration.md)
* [Deployment Guide](doc/Deployment.md)
* Client SDKs
  - [Node.js SDK](https://github.com/pip-services-infrastructure2/client-changescopes-node)
* Communication Protocols
  - [HTTP Version 1](doc/HttpProtocolV1.md)
  - [Seneca Version 1](doc/SenecaProtocolV1.md)

## Contract

Logical contract of the microservice is presented below. For physical implementation (HTTP/REST, Thrift, Seneca, Lambda, etc.),
please, refer to documentation of the specific protocol.

```typescript
class ChangeScopeV1 implements IStringIdentifiable {
    public id: string;
    public change_time: Date;
    public elements: { [element: string]: Date };
}

interface IChangeScopesV1 {
    getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;

    changeScope(correlationId: string, id: string): Promise<ChangeScopeV1>;

    changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;

    deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}
```

## Download

Right now the only way to get the microservice is to check it out directly from github repository
```bash
git clone git@github.com:pip-services-infrastructure2/service-changescopes-node.git
```

Pip.Service team is working to implement packaging and make stable releases available for your 
as zip downloadable archieves.

## Run

Add **config.yml** file to the root of the microservice folder and set configuration parameters.
As the starting point you can use example configuration from **config.example.yml** file. 

Example of microservice configuration
```yaml
- descriptor: "pip-services-container:container-info:default:default:1.0"
  name: "service-changescopes"
  description: "ChangeScopes microservice"

- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

- descriptor: "service-changescopes:persistence:file:default:1.0"
  path: "./data/settings.json"

- descriptor: "service-changescopes:controller:default:default:1.0"

- descriptor: "service-changescopes:service:http:default:1.0"
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 8080
```
 
For more information on the microservice configuration see [Configuration Guide](Configuration.md).

Start the microservice using the command:
```bash
node run
```

## Use

The easiest way to work with the microservice is to use client SDK. 
The complete list of available client SDKs for different languages is listed in the [Quick Links](#links)

If you use Node.js then you should add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-changescopes-node": "^1.0.*",
        ...
    }
}
```

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-changescopes-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.ChangeScopesHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
...
```

Now the client is ready to perform operations
```javascript

// Changes scope
let scope = await client.changeScope(
    null,
    '123',
    parameters
);
```

```javascript
// Get change scopes
let scope = await client.getScopeById(
    null,
    '123'
);
```    

## Acknowledgements

This microservice was created and currently maintained by *Sergey Seroukhov*.

