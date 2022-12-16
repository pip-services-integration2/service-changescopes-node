"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopesServiceFactory = void 0;
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const ChangeScopesMongoDbPersistence_1 = require("../persistence/ChangeScopesMongoDbPersistence");
const ChangeScopesFilePersistence_1 = require("../persistence/ChangeScopesFilePersistence");
const ChangeScopesMemoryPersistence_1 = require("../persistence/ChangeScopesMemoryPersistence");
const ChangeScopesController_1 = require("../logic/ChangeScopesController");
const ChangeScopesCommandableHttpServiceV1_1 = require("../services/version1/ChangeScopesCommandableHttpServiceV1");
class ChangeScopesServiceFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(ChangeScopesServiceFactory.MemoryPersistenceDescriptor, ChangeScopesMemoryPersistence_1.ChangeScopesMemoryPersistence);
        this.registerAsType(ChangeScopesServiceFactory.FilePersistenceDescriptor, ChangeScopesFilePersistence_1.ChangeScopesFilePersistence);
        this.registerAsType(ChangeScopesServiceFactory.MongoDbPersistenceDescriptor, ChangeScopesMongoDbPersistence_1.ChangeScopesMongoDbPersistence);
        this.registerAsType(ChangeScopesServiceFactory.ControllerDescriptor, ChangeScopesController_1.ChangeScopesController);
        this.registerAsType(ChangeScopesServiceFactory.CmdHttpServiceDescriptor, ChangeScopesCommandableHttpServiceV1_1.ChangeScopesCommandableHttpServiceV1);
    }
}
exports.ChangeScopesServiceFactory = ChangeScopesServiceFactory;
ChangeScopesServiceFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor("service-changescopes", "factory", "default", "default", "1.0");
ChangeScopesServiceFactory.MemoryPersistenceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-changescopes", "persistence", "memory", "*", "1.0");
ChangeScopesServiceFactory.FilePersistenceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-changescopes", "persistence", "file", "*", "1.0");
ChangeScopesServiceFactory.MongoDbPersistenceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-changescopes", "persistence", "mongodb", "*", "1.0");
ChangeScopesServiceFactory.ControllerDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-changescopes", "controller", "default", "*", "1.0");
ChangeScopesServiceFactory.CmdHttpServiceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-changescopes", "service", "commandable-http", "*", "1.0");
//# sourceMappingURL=ChangeScopesServiceFactory.js.map