"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopesMongoDbPersistence = void 0;
const pip_services3_mongodb_nodex_1 = require("pip-services3-mongodb-nodex");
class ChangeScopesMongoDbPersistence extends pip_services3_mongodb_nodex_1.IdentifiableMongoDbPersistence {
    constructor() {
        super('change_scopes');
    }
    convertToPublic(item) {
        if (item) {
            item = super.convertToPublic(item);
            item.elements = item.elements || {};
        }
        return item;
    }
    change(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let partial = {
                $set: {
                    change_time: new Date()
                }
            };
            let result = yield this._collection.findOneAndUpdate({ _id: id }, partial, { returnDocument: 'after', upsert: true });
            this._logger.trace(correlationId, "Changed in %s by %s", this._collection, id);
            let newItem = result != null ? this.convertToPublic(result.value) : null;
            return newItem;
        });
    }
    changeElement(correlationId, id, element) {
        return __awaiter(this, void 0, void 0, function* () {
            let now = new Date();
            let partial = {
                $set: {
                    change_time: now
                }
            };
            partial['$set']['elements.' + element] = now;
            let result = yield this._collection.findOneAndUpdate({ _id: id }, partial, { returnDocument: 'after', upsert: true });
            this._logger.trace(correlationId, "Changed in %s by %s", this._collection, id);
            let newItem = result != null ? this.convertToPublic(result.value) : null;
            return newItem;
        });
    }
}
exports.ChangeScopesMongoDbPersistence = ChangeScopesMongoDbPersistence;
//# sourceMappingURL=ChangeScopesMongoDbPersistence.js.map