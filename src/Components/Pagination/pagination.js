import "./pagination.css";
import { MdArrowBackIosNew as BackBtnICon } from 'react-icons/md';
import {MdArrowForwardIos as NextBtnIcon} from "react-icons/md"
const PageNavigator = ({setPageNum,pageNum,paginatedList}) => {
    return (
        <div className="PageNavigator">
            <button
                onClick={() => setPageNum(pageNum === 0 ? 0 : pageNum - 1)}
                className='btn'
            >
                <BackBtnICon  />
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
            >
                <NextBtnIcon  />
            </button>
        </div>
    )
}
export {PageNavigator}