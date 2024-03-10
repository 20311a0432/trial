import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from "@mui/material";

function Search(ref) {

    return (
        <Box
            className='m-4 border-solid border-black'
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
            >
            <TextField
                fullWidth
                id="fullWidth"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                ref={ref}
            />
        </Box>
    );
}

export default React.forwardRef(Search);