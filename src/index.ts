import logger from "moment-logger";
import createServer, { CreateServerOptions } from "@/www";
import pool from "@/helpers/sequelize-pool";

import routes from "@/routes";
import { port, isProduction, allowedDomains } from "@/config";

logger.log("Connecting to SQL Database");
await pool.authenticate();
logger.info("Connected to SQL Database");

// Start Server
logger.log("Starting Server");

logger.info(`Running in ${isProduction ? "production" : "development"} mode`);

const options: CreateServerOptions = {
    port,
    production: isProduction,
    whitelistedDomains: allowedDomains,
};

const app = await createServer(options);

logger.info(`Server started on port ${port}`);

app.use(routes);
