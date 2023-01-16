import { CONSTANTS } from "../actions";

export const addCard = (listId, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listId }
    };
};

export const removeCard = (id, cardId) => {
 

    return {
        type: CONSTANTS.REMOVE_CARD,
        payload: {cardId, id}

       // payload: { id  },
    };
};




