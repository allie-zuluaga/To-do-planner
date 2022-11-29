import React, { Component } from 'react';
import ColumnList from "./ColumnList.js";
import { connect } from "react-redux";
import ActionButton from "./AddButton.js";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions"
//import ColumnCard from "./ColumnCard"
class App extends Component {

    onDragEnd = result => {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      
      this.props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId
        )
      );
  };


  render() {
    const { lists } = this.props;
    return (
      //<DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h2>Hesllo</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <ColumnList 
              listId={list.id}
              key={list.id}
              title={list.title} 
              cards={list.cards}
            />  
          ))}  
          //<ActionButton list />
        </div>
      </div>
    //</DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
    
  }
};
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps) (App);
