const { verify } = require("jsonwebtoken");
const config = require("./config");

const validateToken = (req, res, next) => {
  const accessToken = req.header("token");

  if (!accessToken) return res.json({ error: "User not logged in" });

  try {
    const validToken = verify(accessToken, config.SECRET_CODE);

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};
