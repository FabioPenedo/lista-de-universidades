import { Schema, model, connection } from "mongoose";

export type UserType = {
    name: [string]
}

const schema = new Schema<UserType>({
    name: [String],
});

const modelName: string = 'nameUniversities';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<UserType>(modelName, schema)
;