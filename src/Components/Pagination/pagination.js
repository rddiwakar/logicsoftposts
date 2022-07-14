const PageNavigator = ({setPageNum,pageNum,paginatedList}) => {
    return (
        <div>
            <button
                onClick={() => setPageNum(pageNum === 0 ? 0 : pageNum - 1)}
                className='btn'
            >back
                {/* <BackBtnICon size='14px' /> */}
            </button>
            {paginatedList.map((itm, idx) => {
                return (
                    <button
                        key={idx + 1}
                        onClick={() => setPageNum(idx)}
                        className={`btn ${pageNum === idx ? 'pageNavBtn' : ''}`}
                    >
                        {idx + 1}
                    </button>
                )
            })}
            <button
                onClick={
                    () => setPageNum(pageNum !== (paginatedList.length - 1) ? (pageNum + 1) : (paginatedList.length - 1))
                }
                className='btn'
            >next
                {/* <NextBtnIcon size='14px' /> */}
            </button>
        </div>
    )
}
export {PageNavigator}