// import axios from 'axios'
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const UserService = require('../server/Controllers/UserControllers')
const User = require('../server/Models/UserModel')
require('dotenv').config()


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET


passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const googleId = profile.id;
        const email = profile.emails[0].value;
        const name = profile.name.givenName;
        const lastName = profile.name.familyName;
  
  
        const currentUser = await User.findOne({ email })
   
        if (!currentUser) {
   
          const user = new User({
            googleId, email, name
          })
   
          user.save()
          // return done(null, newUser);
        }
        return done(null,profile)
  
        // currentUser.lastVisited = new Date();
        // return done(null, currentUser);
      }
      )
      );

passport.serializeUser((user, done) => {
 
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currentUser = await User.findOne({ googleId:id});
  done(null, currentUser);
});