import type { NextFunction, Response, Request } from "express";
export declare const ValidationMiddleware: (req: Request<{}, {}, {
    name: string;
    email: string;
    password: string;
}>, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const passwordValidator: (req: Request<{}, {}, {
    password: string;
}>, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validation.middlewares.d.ts.map