const reducer = (state,action)=>{
    switch (action.type){
      case 'SET_CATEGORIE':
        return {...state,categorie:action.payload} // dispatch payload onla beraber sana gelen datasi
  
        case 'SET_PRODUCTS':
          return {...state,products:action.payload}
  
        case 'SET_SEARCH' :
          return {...state, search:action.payload}
        case 'SET_CARD' :
          return {...state, card:[...state.card,action.payload]}
        case 'DELETE_CARD':
          return {...state,card:action.payload}
        default: return state;
    }
  }

  export default reducer;