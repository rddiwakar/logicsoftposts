import { Input } from "../Input/input"
import "./header.css"
const Header = ({searchInput,inputHandler}) => {
    return (
        <div className='Header'>
            <h1>MY Posts</h1>
            <Input 
                placeholder="Search" 
                value={searchInput}
                onChange = {inputHandler}
            />
        </div>
    )
}
export {Header}