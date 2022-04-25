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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';

export const AccountHeader = (props) => {
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
          ผู้ใช้ระบบ
        </Typography>
        <Box sx={{ m: 1 }}>
          <NextLink
          href={'/account/add'}
          >
            <Button
              color="primary"
              variant="contained"
            >
              เพิ่มบัญชี
            </Button>
            </NextLink>
        </Box>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
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
                  placeholder="Username"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-select-small">ตำแหน่ง</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'MD'}>MD</MenuItem>
                    <MenuItem value={'BD'}>BD</MenuItem>
                    <MenuItem value={'HF'}>HF</MenuItem>
                    <MenuItem value={'SALER'}>Saler</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} md={2}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">แผนก</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Department}
                    label="DepartmentChange"
                    onChange={DepartmentChange}
                  >
                    <MenuItem value={10}>Saler</MenuItem>
                    <MenuItem value={20}>Head</MenuItem>
                    <MenuItem value={30}>Support</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} md={2}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-select-small">สถานะ</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={status}
                    label="Status"
                    onChange={StatusChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'on'}>เปิด</MenuItem>
                    <MenuItem value={'off'}>ปิด</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
