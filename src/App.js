import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import VideoList from './components/videolist/VideoList';
function App() {
  const [videoItems,setVideoItems] = useState([]);
  useEffect( () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyDAB5uGTFPefYJGfYUjV9PxFTjZqFttRx0',
        requestOptions
      )
    .then(response => response.json())
    .then(result => setVideoItems(result.items))
    .catch(error => console.log('error', error));
    },[]);
  return (
    <div className="App">
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
