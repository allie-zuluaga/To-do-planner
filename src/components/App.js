import React, { Component } from 'react';
import ColumnList from "./ColumnList.js";
import { connect } from "react-redux";
import ActionButton from "./AddButton.js";
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import { sort } from "../actions"
import styled from "styled-components";



const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  `;
//document.body.style = 'background: #333;';

class App extends Component {
    onDragEnd = result => {
      const { destination, source, draggableId, type } = result;

      
      if (!destination) {
        return;
      }
      this.props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      );
  };


  render() {
    const { lists } = this.props;

    return (
      
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h2 style={styles.h2}>Planning Board</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
           <ListContainer 
              {...provided.droppableProps} 
              ref={provided.innerRef}
           >
          {lists.map((list, index) => (
            <ColumnList 
              listId={list.id}
              key={list.id}
              title={list.title} 
              cards={list.cards}
              index={index}
            />  
          ))}  
          {provided.placeholder}
          <ActionButton list />
        </ListContainer>
        )}
        </Droppable>
      </div>
     </DragDropContext>
    );
  }
}

const styles = 
({
  h2: {
      color: "black",
  }
});
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps) (App);
