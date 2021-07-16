import express from "express";
import User from "../models/userModel.js";
import AsyncHandler from "express-async-handler";

const router = express.Router();

router.get("/", async (req, res) => {
    let users = await User.find({});
    res.json(users);
});
router.get(
    "/:id",
    AsyncHandler(async (req, res) => {
        let user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "user not found" });
        }
    })
);

export default router;
