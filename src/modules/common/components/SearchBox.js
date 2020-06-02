import React, { useState, useEffect } from 'react';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { searchdebounceData } from '../../../actions/gift-index';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function SearchBoxComponent(props) {
    const [valueData, setValueData] = useState('');
    const dispatch = useDispatch();
    const handleDebounceChange = (e) => {
        setValueData(e.target.value)
    }
	const handleClearChange = (e) => {
        setValueData('');
    }
	useEffect(() => {
  debounce(300, () => {
            dispatch(searchdebounceData(valueData));
        })()
}, [valueData, dispatch])
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                  <label style={{ marginLeft: "2%", marginRight: '1%', paddingTop: '16px', display: 'inline-block' }}>Search:</label>
                    <TextField
                        style={{width:80+'%'}}
                        required
                        id="outlined-required"
                        label="Type to search..."
						value={valueData}
                        variant="outlined"
						  InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => {handleClearChange(e)}}	
                >
                 <HighlightOffIcon/>
                </IconButton>
              </InputAdornment>
						  }}
                        onChange={(e) => { handleDebounceChange(e) }}
                    />
                </Grid>
            </Grid>

        </div>
    );
}