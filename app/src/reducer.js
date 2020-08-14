import {
    FETCH_JOKE,
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAILURE,
    TOGGLE_ACTIVE,
} from './actions/actions';

const initialState = {
    isLoading: false,
    active: false,
    data: [],
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKE :
            return {
                ...state,
                isLoading: true,
            };
        case TOGGLE_ACTIVE :
            return {
                ...state,
                active: !state.active,
            }
        case FETCH_JOKE_SUCCESS :
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: '',
            };
        case FETCH_JOKE_FAILURE :
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default :
            return state;
    };
};