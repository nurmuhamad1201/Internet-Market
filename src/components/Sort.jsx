import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Sort = ({ age, handleChange }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"true"}>Active</MenuItem>
          <MenuItem value={"false"}>InActive</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
