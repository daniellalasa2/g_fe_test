import React from "react";
import {AppBar,Toolbar,Typography} from "@material-ui/core"

export default function HeaderBar(props){
  const {title} = props;
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Todos (10)</Typography>
            </Toolbar>
        </AppBar>
    );

}


