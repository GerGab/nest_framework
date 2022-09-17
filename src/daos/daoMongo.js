import mongoContainer from "../Containers/mongoContainer.js"
import { MongoClient } from 'mongodb'
import config from '../config.js'

class daoMongo extends mongoContainer {

    constructor(database,collection){
        const client = new MongoClient(config.mongodb.uri, config.mongodb.options)
        super(client,database,collection)
    }

}

export default daoMongo