const express = require("express");
const router = express.Router();

const middlewares = require("../js/middlewares");
const ctrl = require("./ctrl");

router.get("/logout", ctrl.logout);
router.get("/wallet", middlewares.authenticateAccessToken, ctrl.getAddress);
router.get("/send", middlewares.authenticateAccessToken, ctrl.getAddress);
router.get("/mmtsend", middlewares.authenticateAccessToken, ctrl.getAddress);
router.get(
  "/myinfo/user/:id",
  middlewares.authenticateAccessToken,
  ctrl.myinfos
);
router.get("/history", middlewares.authenticateAccessToken, ctrl.getHistory);
router.get(
  "/user/:id/question",
  middlewares.authenticateAccessToken,
  ctrl.getQuestion
);
router.get(
  "/user/:id/question/:id",
  middlewares.authenticateAccessToken,
  ctrl.getAnswer
);
router.get(
  "/user/master/:id/question",
  middlewares.authenticateAccessToken,
  ctrl.getMaster
);
router.get(
  "/user/master/:id/question/:id",
  middlewares.authenticateAccessToken,
  ctrl.getMasterAn
);

router.post("/myinfo", ctrl.myinfochack);
router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.post("/refresh", ctrl.refresh);
router.post("/passwordfind", ctrl.getPassword);
router.post("/send", ctrl.getSend);
router.post("/mmtsend", ctrl.getSend);
router.post("/user/:id/ask", ctrl.askPush);

router.put("/passwordfind", ctrl.pwChange);
router.put("/myinfo/user/:id", ctrl.myinfoput);
router.put("/user/master/:id/quesion/:id", ctrl.getMasterQnA);

router.delete("/myinfo/user/:id", ctrl.iddelete);
module.exports = router;
