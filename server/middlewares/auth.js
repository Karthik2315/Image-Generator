import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  try {
    const {token} = req.cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, token missing"
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded && decoded.id){
      req.user = decoded
    } else {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, invalid token"
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Authentication failed"
    })
  }
}