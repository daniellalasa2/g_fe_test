import React from "react"
import {FormControl,InputLabel,MenuItem,Select,makeStyles} from "@material-ui/core";

const useStyle= makeStyles({
    filterSelect_root:{
        width:"200px"
      }
});
export default function Filter(props){
    const classes = useStyle();
    return(
        <FormControl variant="outlined">
            <InputLabel id="filter-select-label">Filter</InputLabel>
            <Select
            labelId="filter-select-label"
            id="filter-select"
            // value={10}
            // onChange={handleChange}
            label="Filter"
            className={classes.filterSelect_root}
            >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="incompleted">Incompleted</MenuItem>
            </Select>
        </FormControl>
    );
}