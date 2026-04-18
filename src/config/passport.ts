import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: "http://localhost:3000/api/v1/auth/github/callback",
    },
    function (accessToken: any, refreshToken: any, profile: any, done: any) {
      // 👉 Here you get user data from GitHub
      console.log(profile);

      // Save user in DB (optional)
      return done(null, profile);
    }
  )
);

// Serialize & Deserialize
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user as any);
});

export default passport;