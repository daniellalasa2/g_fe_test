import React from "react";
import {TextField} from "@material-ui/core"

export default function AddField(props){
    return(
      <TextField
        style={{width:"100%"}}
        id="search-field"
        label="Add a todo"
        placeholder="Write a todo then hit Enter"
        variant="outlined"
        {...props}
      />
    );

}