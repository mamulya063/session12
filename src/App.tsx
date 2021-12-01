import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import {useState} from "react";


const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title:"Saga",
    url:"https://reactjs.org/",
    author:"Jordan walke",
    num_comments:3,
    points:4,
    objectID:1,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


function App(){
  const [searchTerm,setSearchTerm]= useState<any>("");

  const handleSearchChange =(e:any) => {
    setSearchTerm(e.target.value);
    
    
  };

  const filteredList:any =list.filter((item: any)  => 
   item.title.includes(searchTerm) 
  );

  return(
    <div className="container">
    <h1>Hacker Stories</h1> 
    <Search value={searchTerm} onChange={handleSearchChange}/>   
<List stories={filteredList} />
    </div>
    );
  }   

  export default App;