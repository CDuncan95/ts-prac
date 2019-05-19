import React, { ReactElement, useState, useEffect } from 'react'
import '../resources/modal.css'
import './AddItemPopup.css';
import { APIListItem } from '../apis/temp';

interface AddItemPopupProps {
    cb_closePopup() : void,
    cb_addNewItem(newItem: APIListItem) : void
};

export function AddItemPopup(props : AddItemPopupProps): ReactElement {
    const [ currentTitle, setCurrentTitle ] = useState('');
    const [ currentDescription, setCurrentDescription ] = useState('');

    const keydownEvent = (ev : any) => {
        if (ev.code.toUpperCase() === 'ESCAPE') {
            props.cb_closePopup();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownEvent);
        return function cleanup() {
            document.removeEventListener('keydown', keydownEvent);
        };
    }, []);

    const commit = () => {
        props.cb_addNewItem({
            title: currentTitle,
            startDate: new Date(),
            description: currentDescription.length ? currentDescription : undefined      
        });
    };

    return (
        <div className='modal'>
            <div className='modal-content add-item-popup'>
                <input
                    className='add-item-entry'
                    type='text'
                    placeholder='Title'
                    value={currentTitle}
                    onChange={({target : { value }}) => setCurrentTitle(value)}
                    />
                <textarea
                    className='add-item-entry'
                    placeholder='Description'
                    value={currentDescription}
                    onChange={({target : { value }}) => setCurrentDescription(value)}
                    
                    ></textarea>
                <div className='button-container'>
                    <button
                        // style={{paddingLeft: 'auto'}}
                        disabled={!currentTitle.length}
                        onClick={commit}>Done!</button>
                </div>
            </div>
        </div>
    );
}