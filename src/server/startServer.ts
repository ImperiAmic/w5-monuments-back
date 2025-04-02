import chalk from "../../node_modules/chalk/source/index.js";
import { app } from "./app.js";

const startServer = (port: number) => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(chalk.bold.green(`🟢👂 Server listening on localhost:${port}`));
  });
};

export default startServer;
