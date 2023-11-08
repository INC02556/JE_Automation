import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const RDInputs = ({ setTablleRow }) => {
  const onClickApplyFilter = (e) => {
    e.preventDefault();
    setTablleRow([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]);
  };
  return (
    <div>
      <form action="">
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Company Code
              <span className="text-red-700 ml-2">*</span>
            </label>
            <TextField
              id="outlined-basic"
              size="small"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="Currency Code"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Document Number <span className="text-red-700 ml-2">*</span>
            </label>
            <TextField
              id="outlined-basic"
              size="small"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="Currency Code"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Posting Date <span className="text-red-700 ml-2">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Document type <span className="text-red-700 ml-2">*</span>
            </label>
            <TextField
              id="outlined-basic"
              size="small"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="Document type"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Document Date <span className="text-red-700 ml-2">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Fiscal Year <span className="text-red-700 ml-2">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Currency Date <span className="text-red-700 ml-2">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Reference <span className="text-red-700 ml-2">*</span>
            </label>
            <TextField
              id="outlined-basic"
              size="small"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="Reference"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold  text-gray-900 ">
              Doc. Header Text <span className="text-red-700 ml-2 ">*</span>
            </label>
            <TextField
              size="small"
              id="outlined-basic"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="Doc. Header Text"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold  text-gray-900 ">
              Cross CC Number <span className="text-red-700 ml-2 ">*</span>
            </label>
            <TextField
              size="small"
              id="outlined-basic"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="Cross CC Number"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold  text-gray-900 ">
              Translation Date <span className="text-red-700 ml-2 ">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold  text-gray-900 ">
              Trading Partner BA <span className="text-red-700 ml-2 ">*</span>
            </label>
            <TextField
              size="small"
              id="outlined-basic"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="Trading Partner BA"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn-white btn-icon text-sm mt-5 ml-auto"
          onClick={onClickApplyFilter}
        >
          Apply Filter 
        </button>
      </form>
    </div>
  );
};

export default RDInputs;
