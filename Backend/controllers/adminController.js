import argon2 from "argon2";
import { adminData } from "../models/adminModel.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";



const signUp = async (req, res) => {
  try {
    const { name, email, password, address, phone, gender } = req.body;

    const hashedPass = await argon2.hash(password);

    const user = new adminData({
      password: hashedPass,
      name,
      email,
      address,
      phone,
      gender,
    });

    await user.save();

    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        gender: user.gender,
      },
      msg: "Signup Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await adminData.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "Invalid password or user not found" });
    }

    const correctPass = await argon2.verify(user.password, password);

    if (correctPass) {
      const token = jwt.sign(
        {
          id: user._id,
          name: user.name,
        },
        process.env.JWT_LOGIN,
        { expiresIn: "24h" }
      );
      res.status(200).json({ token });
    } else {
      res.status(400).json({ msg: "Invalid password or user not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const forgetpassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await adminData.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const refreshToken = crypto.randomBytes(32).toString("hex");
    const tokenhash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    user.refreshToken = tokenhash;
    user.resetPassExpires = Date.now() + (process.env.RESET_TOKEN_EXPIRY || 3600000);

    await user.save();

    const transporter = nodemailer.createTransport({
      service: "GMAIL",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      to: email,
      subject: "RESET Password Link",
      html: `
        <p>Click on the link below to reset your password</p>
        <a href="${process.env.CORS_ORIGIN}/admin/resetpassword?token=${encodeURIComponent(
        refreshToken
      )}">
          RESET password
        </a>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: "Mail sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const resetpassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ msg: "Token and new password are required" });
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await adminData.findOne({
      refreshToken: hashedToken,
      resetPassExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    user.password = await argon2.hash(newPassword);
    user.refreshToken = undefined;
    user.resetPassExpires = undefined;

    await user.save();

    res.status(200).json({ msg: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { signUp, login, forgetpassword, resetpassword };
