import { Mutation } from "../mutation/index.js"

const getDataProductForPage = (params) => {

    const { data: productForPage} = Mutation('get_items', { ids: params })
    return { productForPage }

}

export { getDataProductForPage }