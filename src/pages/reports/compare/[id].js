import React from 'react'
import ResultList from '../../../components/reports/compare/ResultList';
import {
    Grid,
} from '@mui/material';

const id = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <ResultList header='ตัวเทียบ1'/>
            </Grid>
            <Grid item xs={6}>
                <ResultList header='ตัวเทียบ2'/>
            </Grid>
        </Grid>
    )
}
export default id