import mongoose from "mongoose";
export declare const AttemptModel: mongoose.Model<{
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    answers: mongoose.Types.DocumentArray<{
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }> & {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }>;
    quiz: mongoose.Types.ObjectId;
    score?: number | null;
    correctCount?: number | null;
    durationSeconds?: number | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    answers: mongoose.Types.DocumentArray<{
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }> & {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }>;
    quiz: mongoose.Types.ObjectId;
    score?: number | null;
    correctCount?: number | null;
    durationSeconds?: number | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    answers: mongoose.Types.DocumentArray<{
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }> & {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }>;
    quiz: mongoose.Types.ObjectId;
    score?: number | null;
    correctCount?: number | null;
    durationSeconds?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    answers: mongoose.Types.DocumentArray<{
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }> & {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }>;
    quiz: mongoose.Types.ObjectId;
    score?: number | null;
    correctCount?: number | null;
    durationSeconds?: number | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    answers: mongoose.Types.DocumentArray<{
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }> & {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }>;
    quiz: mongoose.Types.ObjectId;
    score?: number | null;
    correctCount?: number | null;
    durationSeconds?: number | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    answers: mongoose.Types.DocumentArray<{
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }> & {
        questionId?: mongoose.Types.ObjectId | null;
        selectedOption?: string | null;
    }>;
    quiz: mongoose.Types.ObjectId;
    score?: number | null;
    correctCount?: number | null;
    durationSeconds?: number | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=attempt.model.d.ts.map