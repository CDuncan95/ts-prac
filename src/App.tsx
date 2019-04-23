import React, { Component } from 'react';
import { get, APIListItem } from './apis/temp'
import ItemList from './components/ItemList'
import logo from './logo.svg';
import './App.css';
import { getPriority } from 'os';

interface AppProps {

}

interface AppState {
  loading: Boolean,
  data: Array<APIListItem>
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {loading: true, data: []};
  }

  componentDidMount() {
    get().then((data: Array<APIListItem>) => {
      this.setState({ data, loading: false })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-content">
          <h1>Making a TODO list</h1>
        </header>
        <main className="App-content">
          { this.state.loading ?
            (<p>Loading</p>) :
            (<ItemList listItems={this.state.data || []}></ItemList>)
          }
        </main>
      </div>
    );
  }
}

export default App;
