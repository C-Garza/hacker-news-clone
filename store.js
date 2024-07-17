const createStore = (reducer) => {
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: (action) => {
            currentState = reducer(currentState, action);
        }
    }
};

const INIT_STATE = {
    favorites: []
};

const favoritesReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "ADD_FAVORITE": {
            const added_favorite = action.payload.favorite;
            const favorites = [...state.favorites, added_favorite];

            return { ...state, favorites };
        }
        case "REMOVE_FAVORITE": {
            const removed_favorite = action.payload.favorite;
            const favorites = state.favorites.filter(favorite => favorite.id !== removed_favorite.id);

            return { ...state, favorites };
        }
        default:
            return state;
    }
};

const store = createStore(favoritesReducer);

export default store;