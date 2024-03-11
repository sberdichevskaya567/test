import React, { createContext, useContext, useState } from 'react'

const FilterContext = createContext()

export const useFilterContext = () => useContext(FilterContext)

export const FilterProvider = ({ children }) => {
    const [selectedFilters, setSelectedFilters] = useState({ brand: '', product: '', price: ''});

    return (
        <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
            {children}
        </FilterContext.Provider>
    )
}