import memoryContainer from '../Containers/memoryContainer.js'

class daoMemory extends memoryContainer {

    constructor(){
        super()
    }

    async findByParameter(param){
        try{
            let objects = await this.items.filter(item => item.email === param.email)

            return objects

        }catch(err){
            console.log(err)
            throw new Error(`Error: ${err.message}`)
        }
    }

}

export default daoMemory