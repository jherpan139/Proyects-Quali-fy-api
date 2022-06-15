const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/User')
const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'top_secret'

    //Checks if token is valid.
passport.use(new JwtStrategy(opts, async function (jwt_payload, done){
    const user = await UserModel.findOne({ where: {
        idUser: jwt_payload.id
    }}).catch((err) => done(err, false))

    if (user){
        done(null, user)
    } else {
        done(null, false)
    }
}))