import type { Request, Response, NextFunction } from "express";
declare const asyncHandler: (requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<any>) => ((req: Request, res: Response, next: NextFunction) => void);
export { asyncHandler };
//# sourceMappingURL=asyncHandler.d.ts.map