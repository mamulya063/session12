
const Search =({onChange,value}:any) => {

const handleChange =(e: any) => {
    onChange();
    
};

return(
    <div>
        <label htmlFor="search">Search</label>
        <input id="search"value={value} onChange={handleChange} />
    </div>
);
};

export default Search;