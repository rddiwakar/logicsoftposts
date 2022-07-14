
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/HeaderSection/header';
import { PostSection } from './Components/PostsSection/PostSection';
import {pagination} from  "./utils/index"

function App() {
  // state
  const [fetchData,setFetchData] = useState([])
  const [searchInput,setSearchInput]=useState("");
  const [posts,setPosts]=useState([])
  

  //handler
  const inputHandler = (event)=>{
    setSearchInput(event.target.value)
  }
  
  //useEffect use
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setFetchData(json)
        setPosts(json)
      })
      .catch(err=>console.log(err))
  },[])

  useEffect(()=>{
    let filteredPost = fetchData.filter((item)=> {
      return  item.title.startsWith(searchInput.toLowerCase());
    })
    setPosts(filteredPost)
  },[searchInput])
  console.log(posts)
  // pagination function use from utils
  const paginatedList = pagination(posts,9)

  return (
    <div className="App">
      <Header inputHandler={inputHandler} searchInput={searchInput} />
      <hr />
      <PostSection posts={paginatedList} />
    </div>
  );
}

export default App;
