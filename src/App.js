import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import VideoList from './components/videolist/VideoList';
import Searchbar from './components/searchbar/Searchbar';
function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems,setVideoItems] = useState([]);
  const search =(searchValuTxt) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchValuTxt}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideoItems(result.items))
      .catch(error => console.log('error', error));
  }//서치 함수 끝 

  useEffect( () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=kr&maxResults=30&key=${API_KEY}`,
        requestOptions
       )
    .then(response => response.json())
    .then(result => setVideoItems(result.items)) //items 받아와서 setVideoItems전달
    .catch(error => console.log('error', error));
    },[]);
  return (
    <div className="App">
      <Searchbar searchResult={search} />
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
