const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/User')
const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'top_secret'

passport.use(new JwtStrategy(opts, async function (jwt_payload, done){
  /*  const usera = await UserModel.findOne({ where: {
        idUser: jwt_payload.id
    }}, function (err, user){
        console.log(usera)
        if (err) {
            return done(err, false)
        }
        if (!user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })*/
    const user = await UserModel.findOne({ where: {
        idUser: jwt_payload.id
    }})
    if (user)
        done(null, user)
}))