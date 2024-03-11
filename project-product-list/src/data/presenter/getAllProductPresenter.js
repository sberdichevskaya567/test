import { Mutation } from "../mutation/index.js"

const getAllProduct = (action, params) => {

    const { data } = Mutation(action, params)
    const allIdProduct = data.filter((el, id)=> data.indexOf(el) === id)
    const pageCount = Math.ceil(allIdProduct.length / 50)

     return {
        allIdProduct,
         pageCount,
    }
}

export { getAllProduct }