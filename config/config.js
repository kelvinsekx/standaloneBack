const config = {
    env: process.env.NODE_ENV || "development",
    port : process.env.PORT || 3005,
    jwtSecret: process.env.JWT_SECRET || 'my_web_token',
    mongoUri: process.env.MONGOIDB_URI || 
	process.env.MONGO_HOST || 
	 "mongodb+srv://utdkelvin:Kukuejubola%401997@cluster0.zbmj6.mongodb.net/socmedia?retryWrites=true&w=majority"
	|| 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'
}

module.exports = config
