class ApiResponse {
    statusCode;
    data;
    message;
    success;
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}
export { ApiResponse };
//# sourceMappingURL=apiResponse.js.map