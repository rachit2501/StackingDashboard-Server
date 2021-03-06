import localStrategy from "passport-local";
import bcrypt from "bcrypt";
let LocalStrategy = localStrategy.Strategy;

async function initialize(passport, getUser, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUser(email);
    if (user == null) {
      return done(null, false, { message: "No user with that username" });
    }
    console.log(user.password);
    console.log(await bcrypt.compare(password, user.password));
    try {
      if (
        // password === user.password
        await bcrypt.compare(password, user.password)
      ) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy({ usernameField: "username" }, authenticateUser)
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    const data = await getUserById(id);
    return done(null, data);
  });
}

export default initialize;
