import React, {Component} from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

async function getPosts() {
  // const url = 'https://www.ikyu.com/concierge/wp-json/ikyu/v1/posts?aid=00001290&type=closeup';
  const url = 'https://www.ikyu.com/concierge/wp-json/wp/v2/posts';
  const res = await axios.get(url).catch(console.error);
  return res.data;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    this.setState({
      posts: await getPosts(),
    });
  }

  render() {
    const { posts } = this.state;
    if (posts[0]) {
      return (
        <div dangerouslySetInnerHTML={{ __html: posts[0].content.rendered }}/>
      );
    }
    return <div>No post</div>;
  }
}

export default App;
