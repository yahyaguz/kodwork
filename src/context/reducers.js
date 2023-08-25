export const initialState = {
    favoriteList: [],
};


export default function (state = initialState, action) {

    switch (action.type) {
        case 'ADD_FAVORITE':
            return { ...state, favoriteList: [...state.favoriteList, action?.payload?.favoritedJob] }
        case 'REMOVE_FAVORITE':
            return { ...state, favoriteList: [...state?.favoriteList?.filter(f => f.id != action?.payload?.favoritedJob.id)] }
        default:
            return state;
    }
}