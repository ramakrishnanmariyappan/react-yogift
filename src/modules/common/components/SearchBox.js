import React, { useState } from 'react';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { searchdebounceData } from '../../../actions/gift-index';

export default function SearchBoxComponent(props) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleDebounceChange = (e) => {
        setValue(e.target.value)
        debounce(300, () => {
            dispatch(searchdebounceData(value));
        })()
    }
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
                        defaultValue=""
                        variant="outlined"
                        onKeyUp={(e) => { handleDebounceChange(e) }}
                    />
                </Grid>
            </Grid>

        </div>
    );
}