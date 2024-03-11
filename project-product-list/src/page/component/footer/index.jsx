import React from 'react'
import Pagination from "../pagination/index.jsx"

const Footer = ({ onClick, page, end }) => {
    return (
        <div className="fixed bottom-0 left-0 pt-[20px] w-full h-[60px] bg-[#f2f3f4] drop-shadow-[0_0_7px_rgba(0,0,0,0.25)]">
            <Pagination
                page={page}
                changePage={onClick}
                countPage={end}
            />
        </div>
    )
}

export default Footer