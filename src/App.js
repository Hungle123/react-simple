import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../public/style/style.css';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import Heading from './components/heading';
import YTSearch from 'youtube-api-search';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

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
        {/* -- Create menu for your app -- */}
          <div className="menu">
            <ul>
              <li><Link>Home</Link></li>
              <li><Link>About</Link></li>
              <li><Link>Contact</Link></li>
            </ul>
            {this.props.children}
          </div>
          {/* -- END menu -- */}
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


