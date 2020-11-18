import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/todos/actions";
import {TextField} from "@material-ui/core";

// This component does not accepts props at this moment
export default function AddField(){
    const [fieldValue, setFieldValue] = useState("");
    // Add a new todo to the global state
    const dispatchAddTodo = useDispatch();

    const handleAddTodo = (e)=>{
      // If user hits Enter
      if(fieldValue.length > 0 && e.charCode === 13){
        // Remove input value
        setFieldValue("");
        dispatchAddTodo(addTodo({title: fieldValue}));
      }
    };
    return(
      <TextField
        style = {{width:"100%"}}
        id = "search-field"
        label = "Add a todo"
        placeholder = "Write a todo then hit Enter"
        variant = "outlined"
        value = {fieldValue}
        onChange  = {e => setFieldValue(e.currentTarget.value)}
        onKeyPress = {handleAddTodo}
      />
    );

}