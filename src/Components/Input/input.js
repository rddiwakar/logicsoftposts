import "./input.css";
import { BsSearch as SearchIcon } from 'react-icons/bs';

const Input = ({placeholder,onChange,value}) => {
    return (
        <div className="Input">
            <SearchIcon size={20} className="searchicon" />
            <input 
                value={value} 
                placeholder={placeholder} 
                onChange={(event)=>onChange(event)} 
            />
        </div>
    )
}
export {Input}