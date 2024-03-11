import { useEffect, useMemo } from "react"
import Index from "../filter/index.jsx"
import Cross from "../../../assets/cross.png"

const sidebarRootElement = document.getElementById('sidebar')

const Sidebar = ({ setIsOpen, isOpen, limit, handelChangeFilter, nameValue, priceValue }) => {

    const element = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
        if (isOpen) {
            sidebarRootElement?.appendChild(element)
            const html = document.querySelector('html')

            if (html) html.style.overflow = 'hidden'

            return () => {
                if (html) html.style.overflow = ''
                sidebarRootElement?.removeChild(element)
            }
        }
    })

    return (
        <>
            <>
                <div
                    className={
                        (isOpen
                            ? 'fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity ease-in-out opacity-100 duration-500'
                            : ' opacity-0 duration-300'
                        )
                    }
                ></div>
                <div
                    className={
                        'fixed overflow-hidden z-10 inset-0 transform ease-in-out' +
                        (isOpen
                            ? ' transition-opacity opacity-100 duration-500 translate-x-0'
                            : '  delay-500 opacity-0 -translate-x-full'
                        )
                    }
                >
                    <div
                        className={
                            ' w-[260px] h-full left-0 absolute bg-[#f3eeeb] duration-500 ease-in-out transition-all transform  ' +
                            (isOpen
                                ? ' -translate-x-0 '
                                : '-translate-x-full'
                            )
                        }
                    >
                        <div>
                            <div className='my-[15px] mr-[20px] '>
                                <div className='flex justify-end'>
                                    <img
                                        src={ Cross }
                                        className="w-[20px] h-[20px]"
                                        onClick={ () => {
                                            setIsOpen(false)
                                        }}
                                    />
                                </div>
                            </div>
                            <Index
                                limit={ limit }
                                handelChangeFilter={ handelChangeFilter }
                                nameValue={ nameValue }
                                priceValue={ priceValue }
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Sidebar