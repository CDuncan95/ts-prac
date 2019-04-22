import React, { Component } from 'react';
import { APIListItem } from '../apis/temp'
import './ItemList.css';

interface ItemListProps {
    listItems: Array<APIListItem>
};

interface ItemListState {

};

class ItemList extends Component<ItemListProps, ItemListState> {
    public render() {
        return (
            <ul className='ItemList'>
                {this.props.listItems.map((listItem : APIListItem) => {
                    console.log(listItem);
                    return (<ListItem data={listItem}></ListItem>);
                })}
            </ul>
        );
    }
};

interface ListItemProps {
    data: APIListItem
};

interface ListItemState {

};

class ListItem extends Component<ListItemProps, ListItemState> {
    public render() {
        return (
            <li className='ListItem'>
                <p>{`${this.props.data.title}`}</p>
                <button className={this.props.data.description ? "VisibleButton" : "HiddenButton"}>Description</button>
            </li>
        );
    }
}

export default ItemList;