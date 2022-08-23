# Configuration Guide <br/> ChangeScopes Microservice

Configuration structure used by this module follows the 
[standard configuration](https://github.com/pip-services/pip-services/blob/master/usage/Configuration.md) 
structure.

Example **config.yml** file:

```yaml
- descriptor: "pip-services-container:container-info:default:default:1.0"
  name: "service-changescopes"
  description: "change scopes microservice"

- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"

- descriptor: "service-changescopes:persistence:file:default:1.0"
  path: "./data/change_scopes.json"

- descriptor: "service-changescopes:controller:default:default:1.0"

- descriptor: "service-changescopes:service:http:default:1.0"
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 3000
```
