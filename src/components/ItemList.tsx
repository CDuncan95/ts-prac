import React, { Component } from 'react';
import { APIListItem } from '../apis/temp'
import expand from '../resources/expand.png'
import collapse from '../resources/collapse.png'
import './ItemList.css';

interface ItemListProps {
    listItems : Array<APIListItem>,
    cb_beginAddItem() : void,
    cb_addItem(newItem: APIListItem) : void,
    addingItem : Boolean
};

export function ItemList(props : ItemListProps) {
    return (
        <ul className='ItemList'>
            {[
                props.addingItem ? 
                    (<AddItemEntries key={-1} cb_addItem={props.cb_addItem}></AddItemEntries>)
                  : (<AddItemButton key={-1} cb_beginAddItem={props.cb_beginAddItem} ></AddItemButton>),
                ...props.listItems.map((listItem : APIListItem, index ) => {
                    return (<ListItem data={listItem} index={index} key={index} ></ListItem>);
            })]}
        </ul>
    );
}

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

interface AddItemButtonProps {
    cb_beginAddItem(): void
};

const AddItemButton = (props : AddItemButtonProps) => {
    return (
            <li
                className='ListItem AddItem'
                onClick={props.cb_beginAddItem}
            >
                <p>Add an item</p>
            </li>
        )
}

interface AddItemEntriesProps {
    cb_addItem(newItem : APIListItem) : void
}

class AddItemEntries extends Component<AddItemEntriesProps> {
    constructor(props: AddItemEntriesProps) {
        super(props);
    }

    render() {
        return (
            <li
                className='ListItem AddItemEntries'    
            >
                <p>Adding an item</p>
                <button onClick={this.addNewItem.bind(this)}></button>
            </li>
        )    
    }

    private addNewItem() {
        this.props.cb_addItem({
            title: "placeholder",
            startDate: new Date()
        });
    }
}

export default ItemList;