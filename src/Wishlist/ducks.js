const initial_state = {
  wishlistOptions: [],
  wishlistItems: []
};

export const GET_WISHLIST_OPTIONS = 'GET_WISHLIST_OPTIONS';
export const GET_WISHLIST_OPTIONS_SUCCESS = 'GET_WISHLIST_OPTIONS_SUCCESS';

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

export const getWishlistOptionsAction = (query) => ({ type: GET_WISHLIST_OPTIONS, query});
export const getWishlistOptionsSuccess = (data) => ({ type: GET_WISHLIST_OPTIONS_SUCCESS, data});

export const addToWishlistAction = (item) => ({type: ADD_TO_WISHLIST, item});
export const removeFromWishlistAction = (item) => ({type: REMOVE_FROM_WISHLIST, item});

const wishlistReducer = (state = initial_state, action) => {
  switch (action.type){
    case GET_WISHLIST_OPTIONS_SUCCESS:
      return {
        ...state,
        wishlistOptions: action.data.list.filter(item => state.wishlistItems.filter(wishItem => item.id === wishItem.id).length === 0)
      }
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.item]
      }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(item => item.id !== action.item.id)
      }
    default:
      return state
  }
}

export default wishlistReducer;