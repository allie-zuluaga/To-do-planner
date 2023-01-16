import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from "../actions/CardActions"
//import {list} from "../reducers/listsReducer"
import { connect } from "react-redux";

const CardContainer = styled.div`
    margin-Bottom: 8px;
    background-color: blue;
`


const ColumnCard = ({ text, id, index, cardId, listId, cards}) => {
    


    const handleRemove = (id, index, cardId) => { 
        const { dispatch } = useDispatch;

        removeCard(id, cardId, index)
        //dispatch({type:'REMOVE_CARD', id: id});
             console.log(id)
             console.log(index)

             console.log(cards)

            // console.log()


            // navigate('/');
            //this.list.splice(index, 1);
             //setState(list)
   }
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
            <CardContainer
                ref={provided.innerRef} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <Card>
                    <CardContent>
                        <button type="button" onMouseDown= {() => handleRemove(id, index, cardId)}
                        >     Remove
                        </button>
                        
                        <Typography gutterBottom>
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            </CardContainer>
         )}
    </Draggable>
    );
};

const styles = {
    cardContainer: {
        marginBottom: 8
    }
};

const mapStateToProps = state => ({
    lists: state.lists
  });

export default connect(mapStateToProps) (ColumnCard);