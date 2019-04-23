import React, { Component } from 'react';
import { APIListItem } from '../apis/temp'
import expand from '../resources/expand.png'
import collapse from '../resources/collapse.png'
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
                {this.props.listItems.map((listItem : APIListItem, index ) => {
                    console.log(listItem);
                    return (<ListItem data={listItem} index={index} key={index} ></ListItem>);
                })}
            </ul>
        );
    }
};

interface ListItemProps {
    key: Number, // required for react
    data: APIListItem,
    index: Number
};

interface ListItemState {
    descriptionCollapsed: boolean
};

class ListItem extends Component<ListItemProps, ListItemState> {

    public constructor(props: ListItemProps) {
        super(props);
        this.state = {
            descriptionCollapsed: true
        };
    }

    public render() {
        return (
            <li className="ListItem" id={`listItem${this.props.index}`}>
                <div className="ListItemConstant">
                    <p className="ListItemTitle">{`${this.props.data.title}`}</p>
                    <img
                        className={this.props.data.description ? 'clickable' : 'notClickable'}
                        onClick={this.props.data.description ? this.toggleCollapsedContent.bind(this) : this.expanderNOOP.bind(this) }
                        src={this.state.descriptionCollapsed ? expand : collapse }
                    ></img>
                </div>
                <div 
                    id={`collapsedContent${this.props.index}`}
                    className={this.state.descriptionCollapsed ? 'collapsed' : 'expanded' }
                >
                    <p>{this.props.data.description || ""}</p>
                </div>
            </li>
        );
    }

    private expanderNOOP() {}

    private toggleCollapsedContent() {
        this.setState({
            descriptionCollapsed: !this.state.descriptionCollapsed
        });
    }
}

export default ItemList;