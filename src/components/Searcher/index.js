import React from "react";
import { TextField, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
  const userNotFoundStyles = {
    color: '#f8312f',
    fontSize: '1rem',
    width: '7rem',
    textAlign: 'center',
  }
  const {
    setInputUser,
    notFound,
  } = props;
  const [ valueInput, setValueInput ] = React.useState('');

  const stackStyles = {
    marginTop: "1.5rem",

    width: "80%",
    height: "40px"
  };
  const textFieldStyles = {
    width: "100%",
    background: "#f8f8f8",
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
        variant="outlined"
        value={valueInput}
        label="GitHub user"
        placeholder="IvanGonzalezR"
        size='small'
        onKeyDown={handleKeyDown}
        onChange={onSearchValueChange}
        InputProps={{
          endAdornment: (
            <Stack direction='row' spacing={1} alignItems='center'>
              {notFound ? (
                <Typography sx={userNotFoundStyles}>User not found</Typography>
              ) : null}
              <IconButton
                size='small'
                onClick={handleSubmit}
              >
                <SearchIcon />
              </IconButton>
            </Stack>
          ),
        }}
      />
    </Stack>
  );
}

export { Searcher };