import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

const JEInputs = () => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (inputValue.length > 0) {
      setOpen(true);
    }
  };
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const [inputValue2, setInputValue2] = useState("");
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    if (inputValue2.length > 0) {
      setOpen2(true);
    }
  };
  const handleInputChange2 = (event, newInputValue) => {
    setInputValue2(newInputValue);
    if (newInputValue.length > 0) {
      setOpen2(true);
    } else {
      setOpen2(false);
    }
  };

  const [inputValue3, setInputValue3] = useState("");
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => {
    if (inputValue3.length > 0) {
      setOpen2(true);
    }
  };
  const handleInputChange3 = (event, newInputValue) => {
    setInputValue3(newInputValue);
    if (newInputValue.length > 0) {
      setOpen3(true);
    } else {
      setOpen3(false);
    }
  };

  return (
    <div>
      {/* <input
        type="date"
        className="w-40 border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-2 focus:border-blue-500 block  p-2.5"
      /> */}
      <form action="">
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Company Code
              <span className="text-red-700 ml-2">*</span>
            </label>
            <Autocomplete
              id="combo-box-demo"
              freeSolo
              open={open}
              onOpen={handleOpen}
              onClose={() => setOpen(false)}
              inputValue={inputValue}
              onInputChange={handleInputChange}
              options={top100Films}
              getOptionLabel={(option) => option.label}
              sx={{ marginTop: "15px" }}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Company Code"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Document Type <span className="text-red-700 ml-2">*</span>
            </label>
            {/* <Autocomplete
              disablePortal
              freeSolo
              id="combo-box-demo"
              sx={{ marginTop: "15px" }}
              options={top100Films}
              size="small"
              renderInput={(params) => (
                <TextField {...params} placeholder="Document Type" />
              )}
            /> */}
            <Autocomplete
              id="combo-box-demo2"
              freeSolo
              open={open2}
              onOpen={handleOpen2}
              onClose={() => setOpen2(false)}
              inputValue={inputValue2}
              onInputChange={handleInputChange2}
              options={top100Films}
              sx={{ marginTop: "15px" }}
              getOptionLabel={(option) => option.label}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Document Type"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              GL Account <span className="text-red-700 ml-2">*</span>
            </label>
            {/* <Autocomplete
              disablePortal
              freeSolo
              id="combo-box-demo"
              sx={{ marginTop: "15px" }}
              options={top100Films}
              size="small"
              renderInput={(params) => (
                <TextField {...params} placeholder="GL Account" />
              )}
            /> */}
            <Autocomplete
              id="combo-box-demo2"
              freeSolo
              open={open3}
              onOpen={handleOpen3}
              onClose={() => setOpen3(false)}
              inputValue={inputValue3}
              onInputChange={handleInputChange3}
              options={top100Films}
              sx={{ marginTop: "15px" }}
              getOptionLabel={(option) => option.label}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="GL Account"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Document type <span className="text-red-700 ml-2">*</span>
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
              Posting Data <span className="text-red-700 ml-2">*</span>
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
              Posting Period <span className="text-red-700 ml-2">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DateRangePicker
                  localeText={{ start: "From", end: "To" }}
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 ">
              Currency Code <span className="text-red-700 ml-2">*</span>
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
              From Document number <span className="text-red-700 ml-2">*</span>
            </label>
            <TextField
              id="outlined-basic"
              size="small"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="From Document number"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold  text-gray-900 ">
              To Document Number <span className="text-red-700 ml-2 ">*</span>
            </label>
            <TextField
              size="small"
              id="outlined-basic"
              margin="dense"
              sx={{ width: "100%" }}
              variant="outlined"
              placeholder="To Document number"
            />
          </div>
        </div>
        <button
          className="btn-white btn-icon text-sm mt-5 ml-auto"
          type="submit"
        >
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default JEInputs;
