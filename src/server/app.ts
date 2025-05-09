import express from "express";
import morgan from "morgan";
import cors from "cors";
import handlerEndpointNotFound from "./middleware/handleEndpointNotFound.js";
import checkHealthStatus from "./middleware/checkHealthStatus.js";
import monumentsRouter from "../monument/router/monumentsRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", checkHealthStatus);

app.use("/monuments", monumentsRouter);

app.use(handlerEndpointNotFound);

export default app;
