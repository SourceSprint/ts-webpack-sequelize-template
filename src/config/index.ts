import dotenv from "dotenv";

import validate, {
    RequiredEnvironment,
    RequiredEnvironmentTypes,
} from "@boxpositron/vre";

dotenv.config();

const runtimeEnvironment: RequiredEnvironment[] = [
    {
        name: "PORT",
        type: RequiredEnvironmentTypes.Number,
    },
    {
        name: "MYSQL_HOST",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "MYSQL_PORT",
        type: RequiredEnvironmentTypes.Number,
    },
    {
        name: "MYSQL_USERNAME",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "MYSQL_PASSWORD",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "MYSQL_DATABASE",
        type: RequiredEnvironmentTypes.String,
    },
];

validate(runtimeEnvironment);

export const isProduction: boolean = process.env.NODE_ENV === "production";
export const port: number = parseInt(process.env.PORT ?? "3000");

export const allowedDomains: string[] =
    process.env.ALLOWED_DOMAINS?.split(",") ?? [];

interface SQLConfig {
    host: string;
    port: number;
    user: string;
    pass: string;
    database: string;
    connection: string;
}

export const sqlConfig: SQLConfig = {
    host: process.env.MYSQL_HOST!,
    port: parseInt(process.env.MYSQL_PORT!),
    user: process.env.MYSQL_USERNAME!,
    pass: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    connection: process.env.MYSQL_CONNECTION!,
};
