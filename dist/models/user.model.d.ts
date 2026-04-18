import mongoose, { Types } from "mongoose";
export interface I_UserDocument extends mongoose.Document {
    "_id": Types.ObjectId;
    "name": string;
    "email": string;
    "password": string;
    "avatar"?: string;
    "isVerified": boolean;
    "verificationToken"?: string | undefined;
    "verificationTokenExpire"?: Date | undefined;
    "resetPasswordToken"?: string;
    "resetPasswordTokenExpire"?: Date | undefined;
    "refreshToken"?: string;
    "role": string;
    "organizationId": Types.ObjectId;
    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefreshToken(): string;
    generateTempToken(): {
        unHashedToken: string;
        hasedToken: string;
        tokenExpiry: Date;
    };
}
export declare const UserModel: mongoose.Model<I_UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, I_UserDocument, {}, {}> & I_UserDocument & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=user.model.d.ts.map