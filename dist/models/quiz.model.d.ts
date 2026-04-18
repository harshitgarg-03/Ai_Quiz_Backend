import mongoose from "mongoose";
export declare const QuizModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "pending" | "ready" | "failed";
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    quizType: "mcq" | "fillup" | "codeerror" | "mixed";
    topic: string;
    questions: mongoose.Types.DocumentArray<{
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }> & {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }>;
    title?: string | null;
    meta?: any;
    createdBy?: mongoose.Types.ObjectId | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "pending" | "ready" | "failed";
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    quizType: "mcq" | "fillup" | "codeerror" | "mixed";
    topic: string;
    questions: mongoose.Types.DocumentArray<{
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }> & {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }>;
    title?: string | null;
    meta?: any;
    createdBy?: mongoose.Types.ObjectId | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "pending" | "ready" | "failed";
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    quizType: "mcq" | "fillup" | "codeerror" | "mixed";
    topic: string;
    questions: mongoose.Types.DocumentArray<{
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }> & {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }>;
    title?: string | null;
    meta?: any;
    createdBy?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "pending" | "ready" | "failed";
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    quizType: "mcq" | "fillup" | "codeerror" | "mixed";
    topic: string;
    questions: mongoose.Types.DocumentArray<{
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }> & {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }>;
    title?: string | null;
    meta?: any;
    createdBy?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "pending" | "ready" | "failed";
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    quizType: "mcq" | "fillup" | "codeerror" | "mixed";
    topic: string;
    questions: mongoose.Types.DocumentArray<{
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }> & {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }>;
    title?: string | null;
    meta?: any;
    createdBy?: mongoose.Types.ObjectId | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "pending" | "ready" | "failed";
    createdAt: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    quizType: "mcq" | "fillup" | "codeerror" | "mixed";
    topic: string;
    questions: mongoose.Types.DocumentArray<{
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }> & {
        type: "mcq" | "fillup" | "codeerror";
        options: mongoose.Types.DocumentArray<{
            id?: string | null;
            text?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            id?: string | null;
            text?: string | null;
        }> & {
            id?: string | null;
            text?: string | null;
        }>;
        question: string;
        title?: string | null;
        explanation?: string | null;
        answer?: string | null;
        correctAnswer?: string | null;
        errorCode?: string | null;
        task?: string | null;
        correctCode?: string | null;
    }>;
    title?: string | null;
    meta?: any;
    createdBy?: mongoose.Types.ObjectId | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=quiz.model.d.ts.map