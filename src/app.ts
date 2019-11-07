/* ENV Variables. */

import * as dotenv from "dotenv";

dotenv.config();


/* Express app. */

import * as express from "express";

const app = express();


/* Middlewares. */

import * as helmet from "helmet";
import * as lusca from "lusca";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";

app.use(helmet());
app.use(lusca.xssProtection(true));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan(
    process.env.NODE_ENV === "production" ?
    "combined" :
    "dev"
));


/* Express app. */

export default app;
