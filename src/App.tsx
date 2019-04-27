import React, { Component } from 'react';
import { ListApi, APIListItem } from './apis/temp'
import ItemList from './components/ItemList'
import './App.css';

interface AppProps {

}

interface AppState {
  loading: Boolean,
  data: Array<APIListItem>,
  addingItem?: Boolean
}

class App extends Component<AppProps, AppState> {

  private listApi: ListApi;

  constructor(props: AppProps) {
    super(props);
    this.state = {loading: true, data: []};
    this.listApi = new ListApi;
  }

  componentDidMount() {
    this.listApi.getItems().then((data: Array<APIListItem>) => {
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
            (<ItemList
              listItems={this.state.data || []}
              cb_beginAddItem={this.beginAddItem.bind(this)}
              cb_addItem={this.addItem.bind(this)}
              addingItem={!!this.state.addingItem}
            ></ItemList>)
          }
        </main>
      </div>
    );
  }

  beginAddItem() {
    this.setState({addingItem: true});
  }

  addItem(newItem: APIListItem) {
    this.setState({
      addingItem: false
    });
    this.listApi.addItem(newItem).then(newItemlist => {
      this.setState({
        data: newItemlist
      });
    })
  }
}

export default App;
