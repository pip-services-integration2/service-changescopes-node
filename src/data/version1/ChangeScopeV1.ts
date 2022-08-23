import { IStringIdentifiable } from 'pip-services3-commons-nodex';

export class ChangeScopeV1 implements IStringIdentifiable {
    public constructor (id: string) {
        this.id = id;
        this.elements = {};
        this.change_time = new Date();
    }

    public id: string;
    public change_time: Date;
    public elements: { [element: string]: Date } ;
}