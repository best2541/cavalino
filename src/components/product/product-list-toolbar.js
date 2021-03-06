import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link'

export const ProductListToolbar = (props) => {
  const [model, setModel] = useState('');
  const [type, setType] = useState('')
  const handleChange = (event) => {
    setModel(event.target.value);
  };
  const typeChange = (event) => {
    setType(event.target.value)
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
          สินค้า
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={(<UploadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Import
          </Button>
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Export
          </Button>
          <NextLink
          href={'/products/add'}
          >
          <Button
            color="primary"
            variant="contained"
          >
            เพิ่มสินค้า
          </Button>
          </NextLink>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
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
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="ชื่อสินค้า"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-select-small">รุ่น</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={model}
                    label="Model"
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
                  <InputLabel id="demo-select-small">ประเภท</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={type}
                    label="type"
                    onChange={typeChange}
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
  );

}