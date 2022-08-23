import { ObjectSchema } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';

export class ChangeScopeV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withRequiredProperty('id', TypeCode.String);
        this.withOptionalProperty('elements', TypeCode.Map);
        this.withOptionalProperty('change_time', TypeCode.DateTime);
    }
}