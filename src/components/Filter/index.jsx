import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {setFilter} from "../../redux/filter/actions";
import {FormControl,InputLabel,MenuItem,Select,makeStyles} from "@material-ui/core";

const useStyle= makeStyles({
    filterSelect_root:{
        width:"100%"
      },
    formControl_root:{
        width:"100%"
    }
});
const filtersList = [
    {id:1, title:"All", value:"all"},
    {id:2 ,title:"Incomplete", value:"incomplete"},
    {id:3 ,title:"Completed", value:"completed"}
];
export default function Filter(props){
    const classes = useStyle();
    const activeFilter = useSelector(store=>store.filter.filter);
    const dispatchFilter = useDispatch();

    const handleFilterChange = (e)=>{
        dispatchFilter(setFilter({filter:e.target.value}));
    }
    return(
        <FormControl variant="outlined" className={classes.formControl_root}>
            <InputLabel id="filter-select-label">Filter</InputLabel>
            <Select
            autoWidth
            labelId="filter-select-label"
            id="filter-select"
            onChange={handleFilterChange}
            label="Filter"
            value={activeFilter}
            className={classes.filterSelect_root}
            >
                {
                    filtersList.map(item=><MenuItem key={item.id} value={item.value}>{item.title}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}