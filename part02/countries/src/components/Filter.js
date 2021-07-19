const Filter = (props) => {
    return (
        <div className="filter">
            Filter countries
            <input
                value={props.value}
                onChange={props.handler}
            />
        </div>
    )

}

export default Filter