import React, {useState, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
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

export default function TaskItem(props){
    const {title, id} = props;
    const classes = useStyle();
    const todosList = useSelector(store=> store.todos);
    const deleteTodo = useDispatch();
    const handleDeleteTodo = ()=>{
      // TODO: ask from user ,are sure or not?(popover, modal)
      deleteTodo(removeTodo({id: id}));
    };
    return(
        <Card className={classes.card_root}>
            <CardHeader
            action={
                <div className={classes.cardHeader_action}>
                <IconButton aria-label="delete" onClick={handleDeleteTodo}>
                    <DeleteIcon />
                </IconButton>
                <Chip label="Completed" deleteIcon={<DoneIcon />} />
                </div>
            }
            className={classes.cardHeader_root}
            title={title}
            />
        </Card>
    );

}