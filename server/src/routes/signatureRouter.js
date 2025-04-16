const express = require("express");

const signatureRouter = express.Router();

const {
  getSignatures
} = require("./signatureRouterMethods");

//*********************************************************************************************************************************//

signatureRouter.get("/get-all", async function (req, res) {
  try {
    const signatures = await getSignatures();
    res.status(200).json({
      signatures: signatures
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

signatureRouter.post("/add", async function (req, res) {
  res.status(501).json({
    error: "not implemented"
  });
});

signatureRouter.all("*", async function (_, res) {
  res.status(404).json({
    message: "Error, not found"
  });
});

//*********************************************************************************************************************************//

module.exports = signatureRouter;