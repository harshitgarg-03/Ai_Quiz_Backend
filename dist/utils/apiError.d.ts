interface IApiErrors {
    statusCode: number;
    message: string;
    success: boolean;
    errors?: unknown;
}
declare class ApiError extends Error implements IApiErrors {
    statusCode: number;
    message: string;
    success: boolean;
    errors?: unknown;
    constructor(statusCode: number, message?: string, errors?: unknown, stack?: string);
}
export { ApiError };
//# sourceMappingURL=apiError.d.ts.map