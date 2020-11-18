import React, {useState, useRef} from "react";
import {useDispatch} from "react-redux";
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
  },
  itemTitleSpan:{
    outline:"none",
    overflow: "hidden"
  }
});

export default function TaskItem(props){
    const {id, title, completedStatus} = props;
    const [editMode, setEditMode] = useState(false);

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
    const ContentEditable = (props)=>{
      const {onChange} = props;
      const ref = useRef();
      console.log(ref);
      ref.current.addEventListener("input",(e)=>{onChange(e)});
      return <span ref={ref} contentEditable {...props}>{title}</span>
    };
    return(
        <Card className={classes.card_root} draggable>
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
            title={<ContentEditable className={classes.itemTitleSpan} onChange={(e)=>console.log("editable: ",e)}/>}
            />
        </Card>
    );

}