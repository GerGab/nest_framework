import 'dotenv/config'
/* import  parse  from 'yargs/yargs'

// get PORT
const args = parse(process.argv.slice(2))
const argsObject = args
                    .default({PORT:8080, MODE:"FORK"})
                    .argv */

//mongo password
const PASSWORD = process.env.MONGO_PASS

export default {
    mongodb: {
        uri: `mongodb+srv://socketIo_template:${PASSWORD}@cluster0.s4fxjqc.mongodb.net/?retryWrites=true&w=majority`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: "admin",
        }
    },
    DATABASE_TYPE : 'mongodb'
}
