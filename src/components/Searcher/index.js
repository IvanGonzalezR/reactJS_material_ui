import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ setInputUser }) => {

  const [ valueInput, setValueInput ] = React.useState('');

  const stackStyles = {
    marginTop: "1.5rem",

    width: "80%",
    height: "40px"
  };
  const textFieldStyles = {
    height: "1rem",
    width: "100%",
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  return (
    <Stack sx={stackStyles} direction='row'>
      <TextField
        sx={textFieldStyles}
        value={valueInput}
        label="GitHub user"
        placeholder="IvanGonzalezR"
        size='small'
        onKeyDown={handleKeyDown}
        onChange={onSearchValueChange}
        InputProps={{
          endAdornment: (
            <IconButton
              size='small'
              onClick={handleSubmit}
            >
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack>
  );
}

export { Searcher };