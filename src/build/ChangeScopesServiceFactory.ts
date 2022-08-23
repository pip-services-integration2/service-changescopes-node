import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { ChangeScopesMongoDbPersistence } from '../persistence/ChangeScopesMongoDbPersistence';
import { ChangeScopesFilePersistence } from '../persistence/ChangeScopesFilePersistence';
import { ChangeScopesMemoryPersistence } from '../persistence/ChangeScopesMemoryPersistence';
import { ChangeScopesController } from '../logic/ChangeScopesController';
import { ChangeScopesHttpServiceV1 } from '../services/version1/ChangeScopesHttpServiceV1';

export class ChangeScopesServiceFactory extends Factory {
	public static Descriptor = new Descriptor("service-changescopes", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("service-changescopes", "persistence", "memory", "*", "1.0");
	public static FilePersistenceDescriptor = new Descriptor("service-changescopes", "persistence", "file", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("service-changescopes", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("service-changescopes", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("service-changescopes", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(ChangeScopesServiceFactory.MemoryPersistenceDescriptor, ChangeScopesMemoryPersistence);
		this.registerAsType(ChangeScopesServiceFactory.FilePersistenceDescriptor, ChangeScopesFilePersistence);
		this.registerAsType(ChangeScopesServiceFactory.MongoDbPersistenceDescriptor, ChangeScopesMongoDbPersistence);
		this.registerAsType(ChangeScopesServiceFactory.ControllerDescriptor, ChangeScopesController);
		this.registerAsType(ChangeScopesServiceFactory.HttpServiceDescriptor, ChangeScopesHttpServiceV1);
	}
	
}
