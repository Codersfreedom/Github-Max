import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy as GitHubStrategy} from 'passport-github2';
import User from '../model/user.model.js';
dotenv.config();

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/api/auth/github/callback"
  },
 async function( profile, done) {
  const user = await User.findOne({username: profile.username});
  //signup
  if(!user){
    const newUser = new User({
      name: profile.displayName,
      username: profile.username,
      profileUrl: profile.profileUrl,
      avatarUrl: profile.photos[0].value,
      likedProfile:[],
      likedBy:[]
    });
    await newUser.save();
     done(null, newUser);
  }else{
    done(null,user)
  }
    
  }
));