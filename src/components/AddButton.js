import React from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card"
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class ActionButton extends React.Component {
    state = {
        formOpen: false,
        text: ""

    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            formOpen: false
        });
    };

    handleInput = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            });
            dispatch(addList(text))
        }
        return;
    };

    handleAddCard = () => {
        const { dispatch, listId } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listId,text));
        }
    };
    
    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1: 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"
        return (
            <div 
            onClick={this.openForm}
            style= {{
                ...styles.openForButtonGroup,
                opacity:buttonTextOpacity, 
                color: buttonTextColor, 
                backgroundColor: buttonTextBackground
             }}
            >
                <Icon>add</Icon>
                <p>Add another item</p>
            </div>
        );
    };

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list 
        ? "Enter list title" 
        : "Enter card title";

        const buttonTitle = list ? "Add list" : "Add card"
        return (<div>
            <Card style={{
                overflow:"visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}
            >
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInput}
                    style={{
                        resize: "none",
                        width: "100%",
                        overflow: "hidden",
                        outline: "none",
                        border: "none"
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button 
                onMouseDown={list ? this.handleAddList : this.handleAddCard}
                variant="contained" 
                style={{color: "white", backgroundColor: "blue"}}
                >
                    { buttonTitle } { " " }
                </Button>
                <Icon style={{ marginLeft: 8, cursor: "pointer"}}>X</Icon>
            </div>
        </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3, 
        height: 36,
        width: 272,
        paddingLeft: 10,

    }, formButtonGroup: {
        marginTop: 0,
        display: "flex",
        alignItens: "center"
    }
};

export default connect() (ActionButton);