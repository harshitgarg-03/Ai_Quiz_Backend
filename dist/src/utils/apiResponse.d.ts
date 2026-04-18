interface IApiResponse<T = any> {
    statusCode: number;
    data?: T;
    message: string;
    success: boolean;
}
declare class ApiResponse<T = any> implements IApiResponse<T> {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
    constructor(statusCode: number, data: T, message?: string);
}
export { ApiResponse };
//# sourceMappingURL=apiResponse.d.ts.map