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
exports.ChangeScopesController = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const ChangeScopesCommandSet_1 = require("./ChangeScopesCommandSet");
class ChangeScopesController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_nodex_2.DependencyResolver(ChangeScopesController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new ChangeScopesCommandSet_1.ChangeScopesCommandSet(this);
        return this._commandSet;
    }
    getScopeById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this._persistence.getOneById(correlationId, id);
            if (item == null) {
                item = {
                    id: id,
                    change_time: new Date(0),
                    elements: {}
                };
            }
            return item;
        });
    }
    changeScope(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this._persistence.change(correlationId, id);
            if (item == null) {
                item = {
                    id: id,
                    change_time: new Date(),
                    elements: {}
                };
            }
            return item;
        });
    }
    changeScopeElement(correlationId, id, element) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this._persistence.changeElement(correlationId, id, element);
            if (item == null) {
                item = {
                    id: id,
                    change_time: new Date(),
                    elements: {}
                };
                item.elements[element] = item.change_time;
            }
            return item;
        });
    }
    deleteScopeById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._persistence.deleteById(correlationId, id);
        });
    }
}
exports.ChangeScopesController = ChangeScopesController;
ChangeScopesController._defaultConfig = pip_services3_commons_nodex_1.ConfigParams.fromTuples('dependencies.persistence', 'service-changescopes:persistence:*:*:1.0');
//# sourceMappingURL=ChangeScopesController.js.map