import React, {useState, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, editTodo} from "../../redux/todos/actions";
import classNames from "classnames";
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
  },
  chip:{
    colorPrimary: { backgroundColor: "yellow" },
    colorSecondary: { backgroundColor: "lightgreen" }
  }
});

export default function TaskItem(props){
    const {id, title, completedStatus} = props;
    const classes = useStyle();
    const dispatchRemoveTodo = useDispatch();
    const dispatchEditTodo = useDispatch();
    const handleDeleteTodo = (_id)=>{
      // TODO: ask from user ,are sure or not?(popover, modal)
      dispatchRemoveTodo(removeTodo({id: _id}));
    };
    const toggleTaskStatus = (_id, _completedStatus)=>{
      dispatchEditTodo(editTodo({id: _id, completedStatus:!_completedStatus}));
    };
    return(
        <Card className={classes.card_root}>
            <CardHeader
            action={
                <div className={classes.cardHeader_action}>
                <IconButton aria-label="delete" onClick={() => handleDeleteTodo(id)}>
                    <DeleteIcon />
                </IconButton>
                <Chip 
                    className={classNames(classes.chip.colorPrimary, classes.chip.colorSecondary)} 
                    label={completedStatus ? "Completed" : "Incomplete"} 
                    color={ completedStatus ? "primary" : "secondary" } 
                    icon={completedStatus ? <DoneIcon style={{direction:"right"}}/> : ()=>{}}
                    onClick={() => toggleTaskStatus(id, completedStatus)} 
                />
                </div>
            }
            className={classes.cardHeader_root}
            title={title}//<input value={title}/>}
            />
        </Card>
    );

}