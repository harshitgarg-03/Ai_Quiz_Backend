import mongoose, { Types } from "mongoose";
import bcrypt from "bcrypt";
import jwt, {} from "jsonwebtoken";
import crypto from "crypto";
const Schema = mongoose.Schema;
;
const user = new Schema({
    "name": { type: String, required: true },
    "email": { type: String, unique: true, required: true },
    "password": { type: String, required: true },
    "organizationId": { type: Schema.Types.ObjectId, ref: "Organization", required: true },
    "role": { type: String, enum: ["owner", "admin", "member"], default: "member" },
    "avatar": { type: String },
    "isVerified": { type: Boolean, default: false },
    "verificationToken": { type: String },
    "verificationTokenExpire": { type: Date },
    "resetPasswordToken": { type: String },
    "resetPasswordTokenExpire": { type: Date },
    "refreshToken": { type: String },
}, { timestamps: true });
user.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
user.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();
    if (update && update.password) {
        this.setUpdate({ ...update, password: await bcrypt.hash(update.password, 10) });
    }
    next();
});
user.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};
user.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        OrgId: this.organizationId
    }, process.env.ACCESS_JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
};
user.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        OrgId: this.organizationId
    }, process.env.REFRESH_JWT_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
};
user.methods.generateTempToken = function () {
    const unHashedToken = crypto.randomBytes(20).toString("hex");
    const hasedToken = crypto
        .createHash("sha256")
        .update(unHashedToken)
        .digest("hex");
    const tokenExpiry = Date.now() + (10 * 60 * 1000);
    return { unHashedToken, hasedToken, tokenExpiry };
};
export const UserModel = mongoose.models?.User || mongoose.model("User", user);
//# sourceMappingURL=user.model.js.map