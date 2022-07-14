const Input = ({placeholder,onChange,value}) => {
    return (
        <div>
            <input 
                value={value} 
                placeholder={placeholder} 
                onChange={(event)=>onChange(event)} 
            />
        </div>
    )
}
export {Input}