const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const appRouter = express();

appRouter.use(express.json());

const LISTEN_PORT = process.env.LISTEN_PORT;

if (!LISTEN_PORT) {
  console.error("FATAL ERROR: env variable LISTEN_PORT is undefined, exiting");
  process.exit(1);
}

//*********************************************************************************************************************************//

/**
 * Catchall endpoint for bad requests
 */
appRouter.all("*", async function (_, res) {
  res.status(404).json({
    message: "Error, route not found"
  });
});

//*********************************************************************************************************************************//

appRouter.listen(LISTEN_PORT, () => {
  console.log(`listening on port ${LISTEN_PORT}`);
});