
import './App.css';
import {Post} from "./Components/Post";
import {GifSearchModal} from "./Components/GifSearchModal";
import { useState, useEffect } from 'react';
import { elementAcceptingRef } from '@mui/utils';
import { PostMessage } from './Components/PostMessage';


function App() {
  const [gifLinks, setGifLinks] = useState([])
  const [search, setSearch] = useState("");
  const [textarea, setTextarea] = useState("");
  const [postMsg, setPostMsg] = useState({imageId:"",text:""});
  let flag = false;

  // useEffect(() => {
      //  let url = "https://jsonplaceholder.typicode.com/users"
 const fetchData = () =>{ 
        fetch( "http://api.giphy.com/v1/gifs/search?q=${trending}&api_key=tnAte8frboaXuOzCyt9CSmLwaPCpEiYr&limit=50")
            .then(response => response.json())
            .then(gifLinks => {
                setGifLinks(gifLinks.data);
                console.log(gifLinks);        
                console.log("working");
            });
            
          }
  //  }, [])

              //for displaying the Gif on the page
  // const renderGif =() =>{
  //   return gifLinks.map(el =>{
  //       return (
  //         <div className="container" key={el.id}>
  //              <img src={el.images.fixed_height.url} style={{width:"250px" ,color:"red"}} alt="gif" />
  //         </div>
  //       )
  //     }
  // );
  // }

  const handleTextarea =(e) =>{
    setTextarea(e.target.value);

    // setPostMsg({
    //   imageId:el.id,        
    //   text: textarea
    // })
  }
  
  const handleImageClick = (el) =>{
        console.log("you clicked on image")
        console.log(el.id);

        //for storing text and gif click information
        setPostMsg({
          imageId:el.id,        
          text: textarea
        })
  }
        //searching for gif
  const handleSearch = (event) => {
    const searchWord = event.target.value;
     console.log(searchWord); 

   const newSearch = gifLinks.filter(gif=>{
     return gif.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    //console.log(gifLinks.slug);
    setGifLinks(newSearch)
    setSearch(search);
    // console.log(search);
  }

  const submitPost =(e)=>{
    e.preventDefault()
    // console.log("post is created")
    if(postMsg.imageId =="" && postMsg.text =="")
    {
      alert("please provide both Text and Gif input")
    }else{
        flag = true;
        console.log(postMsg);
    }
  }

  return (
    <div className="app">
        <Post fetchData={fetchData}  handleTextarea={handleTextarea} submitPost={submitPost}/>
        {  (postMsg.imageId && postMsg.text) != 0 ?
        <PostMessage postMsg={postMsg}  gifLinks={gifLinks} />
        :
        <GifSearchModal  gifLinks={gifLinks} handleImageClick={handleImageClick} handleSearch={handleSearch}/>
        }
    </div>
  );
}

export default App;
