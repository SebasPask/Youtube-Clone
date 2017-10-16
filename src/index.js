import React,{ Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bars';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyD_LJHhbovOCGRUuc1TJ-a4GV_9eknScFc';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: [],
        selectedVideo: null
        };
        this.videoSearch('Mago de oz');
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},4000);
        return (
            <div>
                <SearchBar   onSearchTermChange={ videoSearch} />
                <div>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                </div>


            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));