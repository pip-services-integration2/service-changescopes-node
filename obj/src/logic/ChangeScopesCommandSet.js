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
exports.ChangeScopesCommandSet = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_4 = require("pip-services3-commons-nodex");
class ChangeScopesCommandSet extends pip_services3_commons_nodex_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeGetScopeByIdCommand());
        this.addCommand(this.makeChangeScopeCommand());
        this.addCommand(this.makeChangeScopeElementCommand());
        this.addCommand(this.makeDeleteScopeByIdCommand());
    }
    makeGetScopeByIdCommand() {
        return new pip_services3_commons_nodex_2.Command("get_scope_by_id", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('id', pip_services3_commons_nodex_4.TypeCode.String), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let id = args.getAsNullableString("id");
            return yield this._logic.getScopeById(correlationId, id);
        }));
    }
    makeChangeScopeCommand() {
        return new pip_services3_commons_nodex_2.Command("change_scope", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('id', pip_services3_commons_nodex_4.TypeCode.String), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let id = args.getAsNullableString("id");
            return yield this._logic.changeScope(correlationId, id);
        }));
    }
    makeChangeScopeElementCommand() {
        return new pip_services3_commons_nodex_2.Command("change_scope_element", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('id', pip_services3_commons_nodex_4.TypeCode.String)
            .withRequiredProperty('element', pip_services3_commons_nodex_4.TypeCode.String), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let id = args.getAsNullableString("id");
            let element = args.getAsNullableString("element");
            return yield this._logic.changeScopeElement(correlationId, id, element);
        }));
    }
    makeDeleteScopeByIdCommand() {
        return new pip_services3_commons_nodex_2.Command("delete_scope_by_id", new pip_services3_commons_nodex_3.ObjectSchema(true)
            .withRequiredProperty('id', pip_services3_commons_nodex_4.TypeCode.String), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let id = args.getAsNullableString("id");
            return yield this._logic.deleteScopeById(correlationId, id);
        }));
    }
}
exports.ChangeScopesCommandSet = ChangeScopesCommandSet;
//# sourceMappingURL=ChangeScopesCommandSet.js.map