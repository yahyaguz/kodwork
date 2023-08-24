export default function (state, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const { favoritedJob } = action.payload;
            const newList = [...state.favoriteList, favoritedJob];
            return { ...state, favoriteList: newList }
        default:
            return state;
    }
}