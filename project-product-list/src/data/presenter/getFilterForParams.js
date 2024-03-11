import React from 'react'
import { Mutation } from "../mutation/index.js"

const getIdsFromSelectedFilter = (params) => {

    const { data: idsFromSelectedFilter } = Mutation('filter', params)
    return { idsFromSelectedFilter }
}

export { getIdsFromSelectedFilter }