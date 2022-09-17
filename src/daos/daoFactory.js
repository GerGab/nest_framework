import config from '../config.js'
import daoMongo from './daoMongo.js'
import daoMemory from './daoMemory.js'

let productDao, messageDao, userDao

switch  (config.DATABASE_TYPE) {
    case 'mongodb':
        productDao = new daoMongo("socketIo_template","products")
        messageDao = new daoMongo("socketIo_template","messages")
        userDao = new daoMongo("socketIo_template","users")
        break
    default:
        productDao = new daoMemory()
        messageDao = new daoMemory()
        userDao = new daoMemory()
        break
}

export {productDao,messageDao,userDao}