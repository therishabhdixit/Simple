import React, { useReducer } from 'react';
import { v1 as uuid } from "uuid";
// import { v3 as uuid } from "uuid";
// import { v4 as uuid } from "uuid";
// import { v5 as uuid } from "uuid";
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
                type: 'personal'
            },
            {
                id: 2,
                name: 'Jgill',
                email: 'jgill@gmail.com',
                phone: '111-1111-1111',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Jpill',
                email: 'pill@gmail.com',
                phone: '111-1111-1111',
                type: 'professional'
            }
        ],

        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    //Add contact
    const addContact = contact => {
        contact.id = uuid;
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    //Delete contact

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact,
                deleteContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;