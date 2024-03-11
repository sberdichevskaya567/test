import React, { useState } from 'react'
import { getFilteredProduct } from "../../../data/presenter/getFitredProduct.js"
import FilterPrice from "./components/filter-price.jsx"
import FilterBand from "./components/filter-brand.jsx"
import FilterName from "./components/filter-name.jsx"

const Filter = ({ limit, handelChangeFilter, nameValue, priceValue }) => {
    const { filteredProduct } = getFilteredProduct({ field: "brand", offset: 0, limit: limit })
    let originalBrandProduct = []
    filteredProduct.filter((el) => el !== null).map((ell) => originalBrandProduct.push(ell))
    const brandProduct = originalBrandProduct.filter((el, id) => originalBrandProduct.indexOf(el) === id)
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="">
            <div className="flex justify-between" onClick={handleOpen}>
                <FilterName
                    title="Название"
                    changeDataFilter={ nameValue }
                />
            </div>
            <div>
                <FilterBand
                    title="Бренд"
                    children={ brandProduct }
                    changeDataFilter={ handelChangeFilter }
                />
            </div>
            <div>
                <FilterPrice
                    title="Цена"
                    changeDataFilter={ priceValue }
                />
            </div>

        </div>
    )
}

export default Filter