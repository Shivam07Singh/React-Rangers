import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  gender: { type: String },
  refreshToken: { type: String },
  resetPassExpires: { type: String }
});

const adminData = model("admin", adminSchema);


export { adminData };