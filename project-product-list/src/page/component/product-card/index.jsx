import React from 'react';
import productCover1 from '../../../assets/productСover1.jpg'
import productCover2 from '../../../assets/productСover2.jpg'
import productCover3 from '../../../assets/productСover3.jpg'
import productCover4 from '../../../assets/productСover4.jpg'
import productCover5 from '../../../assets/productСover5.jpg'
import productCover6 from '../../../assets/productСover6.jpg'
import productCover7 from '../../../assets/productСover7.jpg'
import productCover8 from '../../../assets/productСover8.jpg'
import productCover9 from '../../../assets/productСover9.jpg'
import productCover10 from '../../../assets/productСover10.jpg'

const ProductCard = ({ price, brand, product, count }) => {
    const masImg=[
        productCover1, productCover2, productCover3, productCover4, productCover5,
        productCover6, productCover7, productCover8, productCover9, productCover10
    ]
    let countImg = count % 10
    return (
        <div className="relative h-[390px] border-[1px] border-black drop-shadow-[0_0_7px_rgba(0,0,0,0.25)]">
            <div className="h-[300px] w-full border-b-[1px] bg-black border-black">
                <div className="opacity-[0.5]">
                    <img src={ masImg[countImg] }
                         className="absolute object-none object-center h-[300px] w-full"
                    />
                </div>
                <div className="absolute text-3xl font-semibold pt-[40%] h-[300px] text-center w-full text-white hover:after:content-['Купить']" />
                <div className="absolute text-white text-center left-0 bottom-[80px] align-middle
                m-auto pl-2 pb-4 text-lg font-bold drop-shadow-[0_0_7px_rgba(0,0,0,0.25)]"
                >
                    { brand }
                </div>

            </div>

            <div className="absolute bottom-0 h-[90px] w-full">
                <div className="w-[55%] text-sm text-black font-semibold mt-2 ml-2">
                    { product }
                </div>
                <div className="absolute right-0 top-0 text-sm font-semibold mx-2 mt-4 py-1 px-2 text-[#ffba00] border-[1px] border-[#ffba00] rounded-[20px]">
                    { price }
                </div>
            </div>

        </div>
    )
}

export default ProductCard