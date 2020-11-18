import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {removeTodo, editTodo} from "../../redux/todos/actions";
import classNames from "classnames";
import ContentEditable from 'react-contenteditable';
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
    border:"none",
    overflow: "hidden"
  },
  emptyTitle:{
    color:"#c0c0c0",
    fontStyle: "italic"
  }

});

export default function TaskItem(props){
    const {id, completedStatus} = props;
    const [title,setTitle] = useState(props.title);
    const classes = useStyle();

    const dispatchRemoveTodo = useDispatch();
    const dispatchEditTodo = useDispatch();

    const handleTitleOnChange = (e)=>{
      const value = e.currentTarget.innerText.trim();
      setTitle(value);
      if(value.length == 0){
        setTitle("New Task");
      }
    }
    const handleDeleteTodo = ()=>{
      // TODO: ask from user ,are sure or not?(popover, modal)
      dispatchRemoveTodo(removeTodo({id}));
    };
    const handleEditTodo = (_title)=>{
      dispatchEditTodo(editTodo({id, title:_title}));
      handleTitleOnChange(_title);
    };
    const toggleTaskStatus = ()=>{
      dispatchEditTodo(editTodo({id, completedStatus:!completedStatus}));
    };
    
    return(
        <Card className={classes.card_root}>
            <CardHeader
            action={
                <div className={classes.cardHeader_action}>
                <IconButton aria-label="delete" onClick={handleDeleteTodo}>
                    <DeleteIcon />
                </IconButton>
                <Chip 
                    className={classNames(classes.chip.colorPrimary, classes.chip.colorSecondary)} 
                    label={ completedStatus ? "Completed" : "Incomplete" } 
                    color={ completedStatus ? "primary" : "secondary" } 
                    icon={completedStatus ? <DoneIcon style={{direction:"right"}}/> : <></>}
                    onClick={toggleTaskStatus} 
                />
                </div>
            }
            className={classes.cardHeader_root}
            title={<ContentEditable 
                      tagName="span"
                      html={props.title ? props.title : "New task"}
                      onChange = {(e)=>handleTitleOnChange(e)}
                      className={classNames(classes.itemTitleSpan,title.length == 0 && classes.emptyTitle)}
                      onBlur={()=>handleEditTodo(title)}
                    />}
            />
        </Card>
    );

}