import { useEffect, useState } from "react"
import { useFilterContext } from "./filter-context.jsx"

const FilterPrice = ({ title, changeDataFilter }) => {
    const { selectedFilters, setSelectedFilters } = useFilterContext()
    const [isOpen, setIsOpen] = useState(false)
    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }
    const handleChangeFilterPrice = (dataFilter, params) => {
        changeDataFilter(dataFilter, params)
    }

    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        setInputValue(selectedFilters.price || '')
    }, [selectedFilters.price])

    const handleInputChange = (event) => {
        const selectedValue = event.target.value
        setInputValue(selectedValue)
        if (selectedValue === '')
        {
            handleChangeFilterPrice(undefined, 'price')
            setSelectedFilters(prevFilters => ({ ...prevFilters, price: undefined }))
        } else {
            handleChangeFilterPrice(selectedValue, 'price')
            setSelectedFilters(prevFilters => ({ ...prevFilters, price: selectedValue}))
        }
    }

    return (
        <div className="ml-[15px] mt-[15px]">
            <div
                className="flex mb-[10px] justify-between w-[220px]"
                onClick={ handleOnClick }
            >
                <p className="flex text-lg font-medium">
                    { title }
                </p>

                <div className={ `h-[24px] ${isOpen ? ' rotate-180' : ''}` }>
                    ⌵
                </div>
            </div>
            { !isOpen &&
                (
                    <input
                        type="text"
                        className="w-[220px] border-[1px] border-black bg-[#f3eeeb]"
                        value={ inputValue }
                        onChange={ handleInputChange }
                    />
                )
            }
        </div>
    )
}
export default FilterPrice