import Mailgen, { type Content } from "mailgen";
declare const sendEmail: ({ email, subject, mailgenContent }: {
    email: string;
    subject: string;
    mailgenContent: Mailgen.Content;
}) => Promise<void>;
declare const emailVerificationContent: (name: string, verificationUrl: string) => Content;
declare const forgotPasswordContent: (name: string, passwordResetUrl: string) => Content;
export { emailVerificationContent, forgotPasswordContent, sendEmail };
//# sourceMappingURL=sendMail.services.d.ts.map