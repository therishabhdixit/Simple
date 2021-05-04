import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './conatactContext';
import contactReducer from './contactReducers'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill',
                email: 'jill@gmail.com',
                phone: '111-1111-1111',
                types: 'personal'
            },
            {
                id: 2,
                name: 'Jgill',
                email: 'jgill@gmail.com',
                phone: '111-1111-1111',
                types: 'personal'
            },
            {
                id: 3,
                name: 'Jpill',
                email: 'pill@gmail.com',
                phone: '111-1111-1111',
                types: 'personal'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    //Add contact

    //Delete contact


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;