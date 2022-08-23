"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopeV1Schema = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
class ChangeScopeV1Schema extends pip_services3_commons_nodex_1.ObjectSchema {
    constructor() {
        super();
        this.withRequiredProperty('id', pip_services3_commons_nodex_2.TypeCode.String);
        this.withOptionalProperty('elements', pip_services3_commons_nodex_2.TypeCode.Map);
        this.withOptionalProperty('change_time', pip_services3_commons_nodex_2.TypeCode.DateTime);
    }
}
exports.ChangeScopeV1Schema = ChangeScopeV1Schema;
//# sourceMappingURL=ChangeScopeV1Schema.js.map