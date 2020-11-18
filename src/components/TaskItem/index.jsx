import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {removeTodo} from "../../redux/todos/actions";
import {Card, CardHeader, IconButton, Chip, makeStyles} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const useStyle = makeStyles({
  card_root: {
    marginTop:"30px",
    width:"100%"
  },
  cardHeader_root:{
   textAlign:"left" 
  },
  cardHeader_action:{
    margin:"8px 8px 0 0"
  }
});

export default function AddField(props){
    const {title, id} = props;
    const classes = useStyle();
    const deleteTodo = useDispatch(removeTodo(props.id));
    return(
        <Card className={classes.card_root}>
            <CardHeader
            action={
                <div className={classes.cardHeader_action}>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <Chip label="Completed" deleteIcon={<DoneIcon />} onDelete={deleteTodo} />
                </div>
            }
            className={classes.cardHeader_root}
            title={"Test"}
            />
        </Card>
    );

}