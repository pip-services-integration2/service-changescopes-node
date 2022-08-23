import { CommandSet } from 'pip-services3-commons-nodex';
import { ICommand } from 'pip-services3-commons-nodex';
import { Command } from 'pip-services3-commons-nodex';
import { Parameters } from 'pip-services3-commons-nodex';
import { ObjectSchema } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';

import { IChangeScopesController } from './IChangeScopesController';

export class ChangeScopesCommandSet extends CommandSet {
    private _logic: IChangeScopesController;

    constructor(logic: IChangeScopesController) {
        super();

        this._logic = logic;

        // Register commands to the database
		this.addCommand(this.makeGetScopeByIdCommand());
		this.addCommand(this.makeChangeScopeCommand());
		this.addCommand(this.makeChangeScopeElementCommand());
		this.addCommand(this.makeDeleteScopeByIdCommand());
    }

	private makeGetScopeByIdCommand(): ICommand {
		return new Command(
			"get_scope_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let id = args.getAsNullableString("id");
                return await this._logic.getScopeById(correlationId, id);
            }
		);
	}

	private makeChangeScopeCommand(): ICommand {
		return new Command(
			"change_scope",
			new ObjectSchema(true)
				.withRequiredProperty('id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let id = args.getAsNullableString("id");
				return await this._logic.changeScope(correlationId, id);
            }
		);
	}

	private makeChangeScopeElementCommand(): ICommand {
		return new Command(
			"change_scope_element",
			new ObjectSchema(true)
				.withRequiredProperty('id', TypeCode.String)
				.withRequiredProperty('element', TypeCode.String),
			async (correlationId: string, args: Parameters) => {
                let id = args.getAsNullableString("id");
                let element = args.getAsNullableString("element");
                return await this._logic.changeScopeElement(correlationId, id, element);
            }
		);
	}

	private makeDeleteScopeByIdCommand(): ICommand {
		return new Command(
			"delete_scope_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let id = args.getAsNullableString("id");
                return await this._logic.deleteScopeById(correlationId, id);
            }
		);
	}
}