import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token)
    return res.status(403).json({ message: "Token no enviado" });

  jwt.verify(token, "123456", (err, user) => {
    if (err) return res.status(401).json({ message: "Token inválido" });

    req.user = user;
    next();
  });
};
