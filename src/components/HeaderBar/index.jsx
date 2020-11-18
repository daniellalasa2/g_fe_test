import React from "react";
import {AppBar,Toolbar,Typography} from "@material-ui/core"

export default function HeaderBar(props){
    const {title, counter} = props;
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">{title} {!isNaN(counter) && `(${counter})`}</Typography>
            </Toolbar>
        </AppBar>
    );

}