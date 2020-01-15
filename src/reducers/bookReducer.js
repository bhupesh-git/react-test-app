import * as actions from '../actions/bookActions';

export const bookReducer = (state=[], action) => {
    switch(action.type) {
        case actions.SET_BOOK_DATA_ACTION: {
            return {
                ...state,
                bookData: [...action.payload.data]
            }
        }
        case actions.SET_ACTIVE_BOOK_ACTION: {
            return {
                ...state,
                activeBook: {
                    ...action.payload.data
                }
            }
        }
        case actions.CREATE_BOOK_ACTION: {
            return {
                ...state,
                bookData: [action.payload.data, ...state.bookData]
            }
        }
        default: {
            return state;
        }
    }
}