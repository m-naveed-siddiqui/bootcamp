const Search = ({setSearch}) => {
    return (
        <>
            <input type="search" placeholder="Search Task" onChange={(e) => {setSearch(e.target.value)}} />
        </>
    )
}

export default Search;