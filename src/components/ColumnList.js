import React from "react";
import ColumnCard from "./ColumnCard";
import ActionButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";


const ListContainer = styled.div`
    background-color: #b1dae7;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`

const ColumnList = ({ title, cards, listId, index }) => {
    console.log(cards);
    return (
        <Draggable draggableId={String(listId)} index={index} >
            {provided => (
                <ListContainer
                {...provided.draggableProps}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                >
                <Droppable droppableId ={String(listId)} type="card">
                    {provided => (
                    <div 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        //style={styles.container}
                    >
                    <h3> {title}</h3>
                    {cards.map((card, index) => (
                        
                        <ColumnCard 
                            key={card.id}
                            index={index}
                            text={card.text} 
                            id={card.id} />
                            
                        ))}
                         {provided.placeholder}
                        <ActionButton listId={listId} />
                    </div>
                 )}
            </Droppable>
        </ListContainer>
    )}
        </Draggable>
    );
};


const styles = {
    ListContainer: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
};


export default ColumnList;