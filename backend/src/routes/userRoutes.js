import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/perfil", verifyToken, (req, res) => {
  res.json({ message: "Acceso permitido", user: req.user });
});

export default router;
