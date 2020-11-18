import React from "react";
import {useSelector} from "react-redux";
import {AppBar,Toolbar,Typography} from "@material-ui/core"

export default function HeaderBar(props){
    const {title} = props;
    const numberOfTodos = useSelector(store => store.todos.length);
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">{title} ({numberOfTodos})</Typography>
            </Toolbar>
        </AppBar>
    );

}


