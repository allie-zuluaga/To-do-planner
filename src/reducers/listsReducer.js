import { CONSTANTS } from "../actions"

let listId = 3;
let cardId = 6;
const initialState = [
    {
        title: "L",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "xxx" 
            },
            {
                id: `card-${1}`,
                text: "xxxxxxxxx"
            }

        ]

    },
    {
        title: "Brainstorm",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "xxx"
            },
            {
                id: `card-${3}`,
                text: "xxxxxxxxx"
            },
            {
                id: `card-${4}`,
                text: "xxxxxxxxxxxxxxxxx"
            }

        ]

    },
    {
        title: "Important",
        id: `list-${2}`,
        cards: [
            {
                id: `card-${4}`,
                text: "xxx"
            },
            {
                id: `card-${5}`,
                text: "xxxxxxxxx"
            },
            {
                id: `card-${6}`,
                text: "xxxxxxxxxxxxxxxxx"
            }

        ]

    },
    {
        title: "To-do",
        id: `list-${3}`,
        cards: [
            {
                id: 0,
                text: "xxx"
            },
            {
                id: 1,
                text: "xxxxxxxxx"
            },
            {
                id: 2,
                text: "xxxxxxxxxxxxxxxxx"
            }

        ]

    },

];


const listsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listId}`
            };
            listId += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:{
            const newCard = {
                text: action.payload.text,
                id: `card-${cardId}`
            };
            cardId += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                  return list;
                }
             });

            return newState;
            }
            case CONSTANTS.DRAG_HAPPENED:
                const {
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    droppabledId
                } = action.payload;
                const newState = {...state};
                if(droppableIdStart === droppableIdEnd) {
                    const list = state.find(list => droppableIdStart === list.id);
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0, ...card)

                }

                return newState;

        default:
            return state;
    }
};

export default listsReducer;