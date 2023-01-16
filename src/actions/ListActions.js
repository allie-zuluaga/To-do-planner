import { CONSTANTS } from "../actions";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title

    };
};

// export const removeCard = (id, listId,droppableIndexStart, droppableIdStart ) => {
//     return {
//         type: CONSTANTS.REMOVE_CARD,
//         payload: {id, listId, droppableIndexStart, droppableIdStart }

//        // payload: { id  },
//     };
// };

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
)  => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    };

};