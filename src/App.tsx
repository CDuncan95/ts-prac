import React, { Component, ReactElement } from 'react';
import { ListApi, APIListItem } from './apis/temp'
import ItemList from './components/ItemList'
import './App.css';
import { AddItemPopup } from './components/AddItemPopup';

interface AppProps {

}

interface AppState {
  loading: Boolean,
  data: Array<APIListItem>,
  addingItem?: Boolean
}

class App extends Component<AppProps, AppState> {

  private listApi: ListApi = new ListApi();

  public readonly state: AppState = {
    loading: true,
    data: [],
    addingItem: false
  };

  public componentDidMount = (): void => {
    this.listApi.getItems().then((data: Array<APIListItem>) => {
      this.setState({ data, loading: false })
    });
  };

  public render = () : ReactElement => {
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
              cb_beginAddItem={this.beginAddItem}
              cb_addItem={this.addItem}/>)
          }
          { this.state.addingItem ?
            (<AddItemPopup
              cb_closePopup={this.closeAddItemPopup}
              cb_addNewItem={this.addItem}
              />) :
            ""
          }
        </main>
      </div>
    );
  }

  public beginAddItem = (): void => {
    this.setState({addingItem: true});
  }

  public closeAddItemPopup = (): void => {
    this.setState({addingItem: false});
  }

  public addItem = (newItem: APIListItem): void => {
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
