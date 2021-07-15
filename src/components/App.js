import './App.css';
import {useEffect,useState} from "react";



const App=(props)=> {

const [posts,setPosts] =useState([]);
const [visible,setVisible] =useState(10);

const showMoreItems = ()=>{
setVisible((prevValue)=>prevValue+10)
}

  useEffect(() => {
    let url="http://localhost:3000/posts";
    fetch(url)
        .then(res=>res.json())
        .then(r=>setPosts(r))
        .catch(e=>console.log(e))
  }, [posts.length])

  console.log(props);
  return (
    <div>
    hiiiiii
    <ol>
    {posts.length===0?<img src="https://www.konserya.com/images/loading.gif" alt=""/>:posts.slice(0,visible).map(p=>(
      <li key={p.id}>{p.title}</li>
    ))}
    </ol>
    {posts.length>visible?(<button onClick={showMoreItems}>Load More</button>):("")}

    </div>
  );
}



export default App;
