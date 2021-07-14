
const Filter =({newName,handleChange})=> {
        return (
            <div>
                filter shown with
                <input
                    value={newName}
                    onChange={handleChange}
                />
            </div>
        )
    
}
export default Filter