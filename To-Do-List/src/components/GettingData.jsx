import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// import { Checkbox } from "@mui/material";
import * as React from "react";

const GettingData = ({addClick,Name,course,handleCourse,handleName,handleCompanyName,workedCompany}) => {
  let companies = ["Microsoft Corporation", "Google", "Oracle", "IBM"];
  let avlCourses = ["HTML", "CSS", "JS", "React"];
function handleInputChange(e){
    handleCourse(e.target.value)
}
function handleNameByChild(e){
    handleName(e.target.value)
}
function handleCompanyNameByChild(e){
    handleCompanyName(e.target.value)
}
function handleAddClickByChild(){
    addClick();
}
  return (
    <>
      <div className="row my-4">
        <div className="col-md-3">
          <input
            onChange={handleNameByChild}
            className="form-control"
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <div className="col-md-3">
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small-label">Select course</InputLabel>
            <Select
              labelId="demo-select-small-label"
              value={course}
              id="demo-select-small"
              label="Select course"
              onChange={handleInputChange}
            >
              {avlCourses.map((items, index) => {
                return (
                  <MenuItem key={items} value={items}>
                    {items}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="col-md-3">
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small-label">Select company</InputLabel>
            <Select
              labelId="demo-select-small-label"
              value={workedCompany}
              id="demo-select-small"
              label="Select course"
              onChange={handleCompanyNameByChild}
            >
              {companies.map((items, index) => {
                return (
                  <MenuItem key={items} value={items}>
                    {items}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="col-md-3">
          <button onClick={handleAddClickByChild} className="btn btn-outline-success">
            Add your Data
          </button>
        </div>
      </div>
    </>
  );
};
export default GettingData;
