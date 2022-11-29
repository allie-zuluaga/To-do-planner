//import { CardActions } from "@material-ui/core/CardActions";
import React from "react";
import ColumnCard from "./ColumnCard";
import ActionButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";

const ColumnList = ({ title, cards, listId }) => {
    return (
            
                <div 
                  
                    style={styles.container}
                >
                    <h3>{title}</h3>
                    {cards.map((card, index) => (
                        <ColumnCard 
                            key={card.id}
                            index={index}
                            text={card.text} 
                            id={card.id} />
                        ))}
                        <ActionButton listId={listId} />
                    </div>

    );
};

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
};


export default ColumnList;