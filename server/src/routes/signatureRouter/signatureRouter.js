const express = require("express");

const signatureRouter = express.Router();

const {} = require("./signatureRouterMethods");

//*********************************************************************************************************************************//

signatureRouter.all("*", async function (_, res) {
  res.status(404).json({
    message: "Error, not found"
  });
});

//*********************************************************************************************************************************//

module.exports = signatureRouter();