export const loadPhoto = (photos) => {
    return {
        type: 'LOAD_PHOTO',
        photos: photos
    }
}


export const likePhoto = (id) => {
    return {
        type: 'LIKE_PHOTO',
        id: id
    }
}

export const unlikePhoto = (id) => {
    return {
        type: 'UNLIKE_PHOTO',
        id: id
    }
}

