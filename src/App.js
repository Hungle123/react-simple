import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../public/style/style.css';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import Heading from './components/heading';
import YTSearch from 'youtube-api-search';


// YOUTUBE API KEY
const API_KEY = 'AIzaSyBto8oTLJ4cNc4vLk94Vz2lISJtjmGra6M'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('reactjs');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <Heading/>
        <SearchBar onSearchTermChange = {(term) => this.videoSearch(term)}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList videos = {this.state.videos}
          onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;


