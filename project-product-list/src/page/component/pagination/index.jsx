import React from 'react'

const Pagination = ({ page, countPage, changePage }) => {
    const handleChangePage = (valuePage) => {
        changePage(valuePage)
    }
    return (
        <div className="block align-center">
            <div className='flex justify-center gap-4'>
                <button
                    className="border-[1px] border-black w-[50px] text-center drop-shadow-[0_0_7px_rgba(0,0,0,0.25)] hover:bg-black hover:text-white"
                    onClick={() => handleChangePage(1) }
                >
                    {1}
                </button>
                <button onClick={ () => {
                    handleChangePage(page - 1)
                    if (page - 1 < 1) {
                        handleChangePage(1)
                    }}
                }
                >
                    &#9665;
                </button>
                <input
                    type="number"
                    className="w-[50px] bg-[#f2f3f4] border-[1px] border-black text-center appearance-none drop-shadow-[0_0_7px_rgba(0,0,0,0.25)]"
                    min={1}
                    max={countPage}
                    value={(page > countPage) ? 1 : page}
                    onChange={(event) => {
                        if (event.target.value > countPage) event.target.value = countPage
                        if (event.target.value < 1) event.target.value = '1'
                        handleChangePage(event.target.value)}}
                />
                <button onClick={() => {
                    handleChangePage(page + 1)
                    if (page + 1 > countPage) {
                        handleChangePage(countPage)
                    }
                }}>
                    &#9655;
                </button>
                <button
                    className="border-[1px] border-black w-[50px] text-center hover:bg-black drop-shadow-[0_0_7px_rgba(0,0,0,0.25)] hover:text-white"
                    onClick={() => handleChangePage(countPage)}
                >
                    {countPage}
                </button>
            </div>

        </div>
    );
};

export default Pagination