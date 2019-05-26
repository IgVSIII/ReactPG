const reducer = (state =  [], action) => {
    switch (action.type) {
        
            
        case 'LOAD_PHOTO':
            return  [
                    ...state, ...action.photos
                ]                           
            ;

        case 'LIKE_PHOTO': 
            return  state.map((photo) => 
                    { 
                        if ( photo.id === action.id) {
                            photo.liked_by_user = !photo.liked_by_user;
                            photo.likes ++;
                        }
                        return photo;
                    }
                )  
                                 
            ;

        case 'UNLIKE_PHOTO': 
            return state.map((photo) => 
                    { 
                        if ( photo.id === action.id) {
                            photo.liked_by_user = !photo.liked_by_user;
                            photo.likes --;
                        }
                        return photo;
                    }
                )                          
            ;

        default: 
            return state;    
    }
}

export default reducer;