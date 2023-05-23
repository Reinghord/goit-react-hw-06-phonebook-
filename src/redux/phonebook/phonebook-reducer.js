import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    add: (state, { payload: { userName, number } }) => [
      ...state,
      {
        id: nanoid(),
        name: userName,
        number,
      },
    ],
    remove: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { changeFilter: (_, action) => action.payload },
});

export const { add, remove } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;
