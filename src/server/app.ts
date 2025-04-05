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
    origin: [
      "https://imperiamic-monuments-front.netlify.app/",
      "http://localhost:5173/",
    ],
    credentials: true,
  }),
);

app.get("/", checkHealthStatus);
app.use("/monuments", monumentsRouter);
app.use(handlerEndpointNotFound);

export default app;
