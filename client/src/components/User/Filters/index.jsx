import { maxWidth } from "@mui/system";
import React from "react";
import Calendar from "../Calender";
// import DropDowns from "../DropDowns";

function Filter({ handleFilters, filters }) {
  return (
    <div
      style={{
        width:"100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 7.5%",
        // marginTop: "101px",
        // position:"fixed"
      }}
    >
      <Calendar style={{display:"flex" ,flexDirection:"row"}}/>
      {/* <DropDowns handleFilters={handleFilters} filters={filters} /> */}
    </div>
  );
}

export default Filter;