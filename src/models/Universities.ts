import { Schema, model, connection } from "mongoose";

type UserType = {
    domains: [string]
    alpha_two_code: string,
    country: string,
    web_pages: [string],
    name: string,
    stateprovince: string
}

const schema = new Schema<UserType>({
    domains: [String],
    alpha_two_code: { type: String, required: true },
    country: { type: String, required: true },
    web_pages: [String],
    name: { type: String },
    stateprovince: { type: String }
});

const modelName: string = 'Universities';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<UserType>(modelName, schema)
;