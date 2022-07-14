
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/HeaderSection/header';
import { PostSection } from './Components/PostsSection/PostSection';
import {pagination} from  "./utils/index";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { SinglePostPage } from './singlePostPage/singlePost';

function App() {
  // state
  const [fetchData,setFetchData] = useState([])
  const [searchInput,setSearchInput]=useState("");
  const [posts,setPosts]=useState([]);
  const [singlePost,setSinglePost]= useState([])
  

  //handler
  const inputHandler = (event)=>{
    setSearchInput(event.target.value)
  }
  const singlePostHandler =(data)=>{
    setSinglePost(data)
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
      return  item.title.toLowerCase().startsWith(searchInput.toLowerCase());
    })
    setPosts(filteredPost)
  },[searchInput])

  // pagination function use from utils
  const paginatedList = pagination(posts,9);

  return (
    <BrowserRouter className="App">
      <Routes >
        <Route 
          path='/' 
          element={
            <>
              <Header inputHandler={inputHandler} searchInput={searchInput} />
              <hr />
              <PostSection 
              posts={paginatedList} 
              singePostHandler={singlePostHandler} 
              />
            </>
          } 
        />
        <Route path= "/post" element={<SinglePostPage singlePost={singlePost} />} />
      </Routes>
      
    </ BrowserRouter>
  );
}

export default App;
