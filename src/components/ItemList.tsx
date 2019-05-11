import React, { Component, ReactElement } from 'react';
import { APIListItem } from '../apis/temp'
import expand from '../resources/expand.png'
import collapse from '../resources/collapse.png'
import './ItemList.css';

interface ItemListProps {
    listItems : Array<APIListItem>,
    cb_beginAddItem() : void,
    cb_addItem(newItem: APIListItem) : void
};

export function ItemList(props : ItemListProps): ReactElement {
    return (
        <ul className='ItemList'>
            {[
                (<AddItemButton key={-1} cb_beginAddItem={props.cb_beginAddItem} ></AddItemButton>),
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

    public readonly state = {
        descriptionCollapsed: true
    };

    public render = () : ReactElement => {
        return (
            <li className="ListItem" id={`listItem${this.props.index}`}>
                <div className="ListItemConstant">
                    <p className="ListItemTitle">{`${this.props.data.title}`}</p>
                    <img
                        className={this.props.data.description ? 'clickable' : 'notClickable'}
                        onClick={this.props.data.description ? this.toggleCollapsedContent : ()=>{/*NOOP*/} }
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

    private toggleCollapsedContent = (): void => {
        this.setState({
            descriptionCollapsed: !this.state.descriptionCollapsed
        });
    }
}

interface AddItemButtonProps {
    cb_beginAddItem(): void
};

const AddItemButton = (props : AddItemButtonProps): ReactElement => {
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

    public render(): ReactElement {
        return (
            <li
                className='ListItem AddItemEntries'    
            >
                <p>Adding an item</p>
                {/* <button onClick={this.addNewItem}></button> */}
            </li>
        )    
    }

    private addNewItem = (): void => {
        this.props.cb_addItem({
            title: "placeholder",
            startDate: new Date()
        });
    }
}

export default ItemList;