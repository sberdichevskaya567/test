import { Mutation } from "../mutation/index.js"

const getFilteredProduct = (params) => {
    const { data: filteredProduct } = Mutation('get_fields', params)
    return {filteredProduct}
}
export { getFilteredProduct }