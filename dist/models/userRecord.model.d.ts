import mongoose from "mongoose";
export declare const UserRecordModel: mongoose.Model<{
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    feature: string;
    tokensEstimated: number;
    costCentsEstimated: number;
    meta?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    feature: string;
    tokensEstimated: number;
    costCentsEstimated: number;
    meta?: any;
}, {}, mongoose.DefaultSchemaOptions> & {
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    feature: string;
    tokensEstimated: number;
    costCentsEstimated: number;
    meta?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    feature: string;
    tokensEstimated: number;
    costCentsEstimated: number;
    meta?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    feature: string;
    tokensEstimated: number;
    costCentsEstimated: number;
    meta?: any;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    feature: string;
    tokensEstimated: number;
    costCentsEstimated: number;
    meta?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=userRecord.model.d.ts.map