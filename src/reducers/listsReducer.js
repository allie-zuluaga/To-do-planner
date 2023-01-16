import { CONSTANTS } from "../actions"

let listId = 3;
let cardId = 6;
const initialState = [
    {
        title: "High priority",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Backlog review" 
            },
            {
                id: `card-${1}`,
                text: ""
            }

        ]

    },
    {
        title: "To-do",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "Research phase 2"
            },
            {
                id: `card-${3}`,
                text: "Write end-to-end test"
            },
            {
                id: `card-${4}`,
                text: "xxxxxxxxxxxxxxxxx"
            }

        ]

    },
    {
        title: "In Progress",
        id: `list-${2}`,
        cards: [
            {
                id: `card-${4}`,
                text: "Research phase 1"
            },
            {
                id: `card-${5}`,
                text: "Review Design Docs"
            },
            {
                id: `card-${6}`,
                text: "Review improvements"
            }

        ]

    },


];


const listsReducer = (state = initialState, action) => {
    
  //  console.log(cardId)

    switch (action.type) {

        case CONSTANTS.ADD_LIST: {
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listId}`
            };
            listId += 1;
            return [...state, newList];
        }
            case CONSTANTS.REMOVE_CARD: {

                const {
                   id,
                   list,
                   cards,
                   cardId,
                   //index,
                 
                   
                } = action.payload;

                console.log(id)
                        return {
                          
                            ...state,
                            cards: [state.list.cards.filter(({id}) => id !== action.payload.cardId)]
                        };
                
                // return {
                //     ...state,
                //     cards: [...list.cards, state.cards.filter(({id}) => id !== action.payload.cardId)]
                // }
                // const {
                //    id,
                //    list,
                //    cards,
                //    //index,
                //    droppableIdStart,
                //    droppableIndexStart
                   
                // } = action.payload;
                // //const newState = [...state]

                // const newList = {
                //     title: action.payload,
                //     cards: [...state, state.filter((action.payload.list.cards = action.payload.cardId !== action.payload.id))],
                //     id: `list-${listId}`
                // };
                    //const listStart = state.find(list => listId === list.id);
                    //remove card from original list
                    // const list = state.find(list => listId === list.id);

                    // const c = list.cards.filter((list) => id !== cardId)
                

                //return [...state, newList];
            }
            
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardId}`
            };
            cardId += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    //console.log(list)

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
                    draggableId,
                    type
                } = action.payload;
                const newState = [...state];

                //drag n drop list
                if(type === "list") {
                    const list = newState.splice(droppableIndexStart, 1);
                    newState.splice(droppableIndexEnd, 0, ...list);
                    return newState;
                }
                //drag n drop card in same list 
                if(droppableIdStart === droppableIdEnd) {
                    const list = state.find(list => droppableIdStart === list.id);
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0, ...card)
                }

                //drop card in other list 
                if (droppableIdStart !== droppableIdEnd) {
                    //find original list 
                    const listStart = state.find(list => droppableIdStart === list.id);
                    //remove card from original list
                    const card = listStart.cards.splice(droppableIndexStart, 1);
                    //find list where drag ended
                    const listEnd = state.find(list => droppableIdEnd === list.id);
                    listEnd.cards.splice(droppableIndexEnd, 0, ...card);
                }

                return newState;

        default:
            return state;
    }

};

export default listsReducer; 