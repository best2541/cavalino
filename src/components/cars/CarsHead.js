import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';

export const CarsHead = (props) => {
  const [role, setRole] = React.useState('');
  const [Department, setDepartment] = React.useState('')
  const [status, setStatus] = React.useState('')
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const DepartmentChange = (event) => {
    setDepartment(event.target.value)
  }
  const StatusChange = (event) => {
    setStatus(event.target.value)
  }
  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          รถ
        </Typography>
        <Box sx={{ m: 1 }}>
          <NextLink href='/cars/add'>
            <Button
              color="primary"
              variant="contained"
            >
              เพิ่มรถ
            </Button>
          </NextLink>
        </Box>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          color="action"
                          fontSize="small"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="ชื่อรถ"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-number"
                    label="งบประมาณ"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
