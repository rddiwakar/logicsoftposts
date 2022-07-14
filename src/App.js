
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/HeaderSection/header';
import { PostSection } from './Components/PostsSection/PostSection';

function App() {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
      .catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
      <Header />
      <PostSection />
    </div>
  );
}

export default App;
