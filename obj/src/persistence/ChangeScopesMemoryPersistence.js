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
exports.ChangeScopesMemoryPersistence = void 0;
const pip_services3_data_nodex_1 = require("pip-services3-data-nodex");
const ChangeScopeV1_1 = require("../data/version1/ChangeScopeV1");
class ChangeScopesMemoryPersistence extends pip_services3_data_nodex_1.IdentifiableMemoryPersistence {
    constructor() {
        super();
    }
    change(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = this._items.map((x) => { return x.id; }).indexOf(id);
            let item = index >= 0
                ? this._items[index] : new ChangeScopeV1_1.ChangeScopeV1(id);
            // Update time
            item.change_time = new Date();
            if (index < 0)
                this._items.push(item);
            this._logger.trace(correlationId, "Updated item by %s", id);
            yield this.save(correlationId);
            return item;
        });
    }
    changeElement(correlationId, id, element) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = this._items.map((x) => { return x.id; }).indexOf(id);
            let item = index >= 0
                ? this._items[index] : new ChangeScopeV1_1.ChangeScopeV1(id);
            // Update time
            let now = new Date();
            item.change_time = now;
            // Update element
            item.elements = item.elements || {};
            item.elements[element] = now;
            if (index < 0)
                this._items.push(item);
            this._logger.trace(correlationId, "Updated item by %s", id);
            yield this.save(correlationId);
            return item;
        });
    }
}
exports.ChangeScopesMemoryPersistence = ChangeScopesMemoryPersistence;
//# sourceMappingURL=ChangeScopesMemoryPersistence.js.map