import mongoose, { type Date, type Mixed } from "mongoose";
interface I_Organization extends mongoose.Document {
    "name": string;
    "slug": string;
    "billingCustomerId": string;
    "planSku": string;
    "seats": number;
    "settings": Mixed;
    "status": string;
    createdAt: Date;
}
export declare const OrgModel: mongoose.Model<I_Organization, {}, {}, {}, mongoose.Document<unknown, {}, I_Organization, {}, {}> & I_Organization & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=organization.model.d.ts.map