import { Profile } from "passport-github2";

declare global {
  namespace Express {
    interface User extends Profile {}
  }
}

export {};