import { Schema, model, connection } from "mongoose";

export type UserType = {
    domains: [string]
    alpha_two_code: string,
    country: string,
    web_pages: [string],
    name: string,
    stateprovince: string
}

const schema = new Schema<UserType>({
    domains: [String],
    alpha_two_code: String,
    country: String,
    web_pages: [String],
    name: String,
    stateprovince: String
});

const modelName: string = 'Universities';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<UserType>(modelName, schema)
;