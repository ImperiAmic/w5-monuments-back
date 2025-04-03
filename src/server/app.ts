import express from "express";
import morgan from "morgan";
import handlerEndpointNotFound from "./middleware/handleEndpointNotFound.js";

const app = express();

app.use(morgan("dev"));

app.use(handlerEndpointNotFound);

export default app;
