import React from 'react';

import DataApi from '../DataApi';
import { data } from '../testData.json';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
	articleAction = {
	  lookupAuthor: (authorId) => this.state.authors[authorId],
	}
	render() {
	  console.log(this.state.articles);
	  console.log(this.state.authors);
	  return (
	    <ArticleList 
	      articles={this.state.articles}
	      articleAction={this.articleAction}
	    />
	  );
	}

}

export default App;
