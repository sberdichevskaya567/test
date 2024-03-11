import { useState } from "react"
import { useFilterContext } from "./filter-context.jsx"

const FilterBand = ({ children, title, changeDataFilter }) => {
    const { selectedFilters, setSelectedFilters } = useFilterContext()
    const [isShowAll, setIsShowAll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const isExpandable = children.length > 6

    const handleOnShow = () => {
        setIsShowAll(!isShowAll)
    }
    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }

    const handleChangeFilterBrand = (dataFilter, params) => {
        changeDataFilter(dataFilter, params)
    }

    const handleRadioClick = (event) => {
        const selectedValue = event.target.value

        if (selectedItem === selectedValue) {
            //setSelectedItem(null)
            handleChangeFilterBrand('', 'brand')
            setSelectedFilters(prevFilters => ({ ...prevFilters, brand: '' }))
        } else {
            //setSelectedItem(selectedValue)
            handleChangeFilterBrand(selectedValue, 'brand')
            setSelectedFilters(prevFilters => ({ ...prevFilters, brand: selectedValue }))
        }
    }

    const handleRadioOnChange = (event) => {
        const selectedValue = event.target.value

        if (selectedItem === selectedValue) {
            setSelectedItem(null)
        } else {
            setSelectedItem(selectedValue)
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

                <div
                    className={ `h-[24px] ${isOpen ? ' rotate-180' : ''}` }
                >
                    ⌵
                </div>
            </div>
            { !isOpen &&
                (
                    <>
                        <div
                            className={ (isShowAll
                                ? 'h-[310px] overflow-y-scroll'
                                : 'h-[145px] overflow-y-hidden'
                            ) }
                        >
                            { children.map((el, index) => {
                                return (
                                    <div
                                        className="flex gap-[8px]"
                                        key = { `${el}filterBrand_${index}` }
                                    >
                                        <input
                                            id={ `${index}_${el}` }
                                            value={ el }
                                            type="radio"
                                            className="appearance-none h-4 w-4 mt-[4px] border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none"
                                            checked={ selectedFilters['brand'] === el }
                                            onChange={ (event) => handleRadioOnChange(event) }
                                            onClick={ (event) => handleRadioClick(event, index) }
                                        />
                                        <div className="flex">
                                            {el}
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>

                        { isExpandable === true && (
                            <div>
                                { isShowAll
                                    ? (
                                        <div className="text-sm font-medium text-[#696969FF] italic mt-[8px] cursor-pointer"
                                             onClick={ handleOnShow }
                                        >
                                            Скрыть
                                        </div>
                                    )
                                    : (
                                        <div className="text-sm font-medium text-[#696969FF] italic mt-[8px] cursor-pointer"
                                             onClick={ handleOnShow }
                                        >
                                            Показать все
                                        </div>
                                    ) }
                            </div>
                        ) }
                    </>
                )
            }
        </div>
    )
}
export default FilterBand