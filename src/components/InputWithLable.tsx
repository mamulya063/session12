import React from "react";
import Search from "./Search";


const Serach =({onChange, value, children ,id} : any) => {
    const handelChange = (e:any) => {
        onChange(e);
    };

    return (
        <>
           <label htmlFor={id}>{children}</label> 
           <input id={id} value={value} onChange={handelChange}/>
           </>   
    );
};
export default Search;