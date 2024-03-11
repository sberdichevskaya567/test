import { getAllProduct } from "../data/presenter/getAllProductPresenter.js"
import ProductCard from "./component/product-card/index.jsx"
import { useEffect, useState } from "react"
import { getDataProductForPage } from "../data/presenter/getDataProductForPage.js"
import Footer from "./component/footer/index.jsx"
import loading from "../assets/loading.png"
import Filter from "./component/filter/index.jsx"
import { getIdsFromSelectedFilter } from "../data/presenter/getFilterForParams.js"
import Sidebar from "./component/sidebar/index.jsx"
import FilterIcon from "../assets/filter.png"

const MainPage = () => {
    const { allIdProduct, pageCount } = getAllProduct('get_ids')
    const [page, setPage] = useState(1)
    const [dataFilterBrand, setDataFilterBrand] = useState([])
    const [dataFilterName, setDataFilterName] = useState([])
    const [dataFilterPrice, setDataFilterPrice] = useState([])
    const [intersection, setIntersection] = useState(allIdProduct);
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState(false)
    const [data, setData] = useState([])
    const {productForPage} = getDataProductForPage(data)
    const uniqueIds = {};

    const handlePagination = (page) => {
        setPage(page)
    }
    const handelChangeFilterBrand = (dataFilter, params) => {
        setDataFilterBrand([dataFilter, params])
    }
    const handelChangeFilterName = (dataFilterName, params) => {
        setDataFilterName([dataFilterName, params])
    }

    const handelChangeFilterPrice = (dataFilterPrice, params) => {
        setDataFilterPrice([dataFilterPrice, params])
    }
    const dataForFilteredCards = (filter, params) => {
        const {idsFromSelectedFilter} = getIdsFromSelectedFilter({[filter]: params})
        return idsFromSelectedFilter
    }

    let dataBrandIds = []
    dataForFilteredCards(dataFilterBrand[1], dataFilterBrand[0])
    && dataForFilteredCards(dataFilterBrand[1], dataFilterBrand[0]).map((el) => (
        dataBrandIds.push(el)
    ))
    let dataNameIds = []
    dataForFilteredCards(dataFilterName[1], dataFilterName[0])
    && dataForFilteredCards(dataFilterName[1], dataFilterName[0]).map((el) => (
        dataNameIds.push(el)
    ))
    let dataPriceIds = []
    dataForFilteredCards(dataFilterPrice[1], Number(dataFilterPrice[0]))
    && dataForFilteredCards(dataFilterPrice[1], Number(dataFilterPrice[0])).map((el) => (
        dataPriceIds.push(el)
    ))
    const pageCountForPagination = () => {
        if (dataBrandIds.length === 0 && dataPriceIds.length === 0 && dataNameIds.length === 0) return pageCount
        else return Math.ceil(intersection.length / 50)

    }
    useEffect(() => {
        let arrays = [allIdProduct, dataBrandIds, dataPriceIds, dataNameIds].filter(arr => arr.length > 0);
        if (arrays && arrays.length === 0) {
            setIntersection([])
        } else {
            let newIntersection = arrays[0];
            for (let i = 1; i < arrays.length; i++) {
                newIntersection = newIntersection.filter(value => arrays[i].includes(value));
                if (newIntersection.length === 0) break; // Прерываем цикл если пересечение стало пустым
            }
            setIntersection(newIntersection); // Обновляем результат пересечения
        }
    }, [allIdProduct.length, dataBrandIds.length, dataPriceIds.length, dataNameIds.length]);

    useEffect(() => {
        if ((((dataFilterPrice[0] !== undefined && dataPriceIds.length === 0)
                || (dataFilterName[0] !== undefined && dataNameIds.length === 0))
            || (dataFilterBrand[0] !== undefined && intersection.length === 0))) {
            setSearch(false)
        } else setSearch(true)
    }, [intersection.length, dataFilterPrice[0], dataFilterName[0], dataFilterBrand[0], dataBrandIds, dataPriceIds, dataNameIds])

    useEffect(() => {
        if (intersection.length > 50) setData(intersection.slice((page - 1) * 50, page * 50))
        else setData(intersection)
    }, [page, intersection.length])


    const filteredArray = productForPage.filter(item => {
        if (!uniqueIds[item.id]) {
            uniqueIds[item.id] = true
            return true
        }
    })

    return (
        <div className="flex">
            <Sidebar
                isOpen={ isOpen }
                setIsOpen={ setIsOpen }
                limit={ allIdProduct.length }
                handelChangeFilter={ handelChangeFilterBrand }
                nameValue={ handelChangeFilterName }
                priceValue={ handelChangeFilterPrice }
            />
            <div className="grid max-660:hidden">
                <div className="grid col-span-1 border-[1px] border-black w-[250px] h-fit ml-[20px] pb-[20px]">
                    <Filter
                        limit={ allIdProduct.length }
                        handelChangeFilter={ handelChangeFilterBrand }
                        nameValue={ handelChangeFilterName }
                        priceValue={ handelChangeFilterPrice }
                    />
                </div>
            </div>
            <div
                className="hidden max-660:flex  max-660:flex-wrap"
                onClick={ () => setIsOpen(true) }
            >
                <img
                    src={ FilterIcon }
                    className="ml-4 w-[30px] h-[30px]"
                />
            </div>
            <div className="grid w-full">
                <div>
                    { filteredArray.length === 0 && search ?
                        <div className="absolute top-[40%] left-[50%] w-[50px] h-[50px] animate-spin">
                            <img src={ loading } />
                        </div>
                        : filteredArray.length === 0 && !search ?
                            <div className="text-center mt-[20%]">
                                Нет совпадений
                            </div>
                            :
                            filteredArray.length > 0 &&
                            <>
                                { search ?
                                    <div className="grid grid-cols-auto-fill-250 gap-8 mx-8 ">
                                        {filteredArray.map((el, index) => (
                                            <div key={ `${index}_cardProduct` }>
                                                <ProductCard
                                                    brand={ el.brand }
                                                    count={ index }
                                                    product={ el.product }
                                                    price={ el.price }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div className="text-center mt-[20%]">
                                        Нет совпадений
                                    </div>
                                }
                            </>
                    }
                </div>
            </div>
            <Footer
                page={ page }
                onClick={ handlePagination }
                end={ pageCountForPagination() }
            />
        </div>
    )
}
export default MainPage