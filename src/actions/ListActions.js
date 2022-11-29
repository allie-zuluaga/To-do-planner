import { CONSTANTS } from "../actions";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title

    };
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    droppabledId
)  => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            droppabledId
        }
    };

};