import {
  Autocomplete,
  Button,
  Container,
  TextField,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import TableAddress from '../TableAddress/TableAddress';
import { District, Province, Ward, DataTable } from '../../../types';
import { dataAddress } from '../../../data/address';
import { search } from '../../../pages/Home/homeSlice';
import { dataTables } from '../../../data/address';
import { useDispatch } from 'react-redux';

const SearchAddress = () => {
  const dispatch = useDispatch();
  const [provinceData, setProvinceData] = useState<Province | null>(null);
  const [districtData, setDistrictData] = useState<District | null>(null);
  const [wardData, setWardData] = useState<Ward | null>(null);
  const dataSearch = dataTables.filter((item: DataTable) => {
    if (provinceData === null) {
      return item;
    } else if (districtData === null) {
      return item.province.id === provinceData?.id;
    } else if (wardData === null) {
      return (
        item.province.id === provinceData?.id &&
        item.district.id === districtData?.id
      );
    } else {
      return (
        item.province.id === provinceData?.id &&
        item.district.id === districtData?.id &&
        item.ward.id === wardData?.id
      );
    }
  });

  return (
    <Container maxWidth="xl" sx={{ mt: 2, pb: 6 }}>
      <Stack
        sx={{
          boxShadow: '0 4px 12px 0 rgb(34 41 47 / 12%)',
          border: '1px solid rgba(38,56,150,.1411764705882353)',
          borderRadius: '10px',
          padding: '24px',
          backgroundColor: '#fff',
          mx: 2
        }}>
        <Typography component="h5" variant="h5" fontWeight={700}>
          Tra cứu điểm tiêm theo địa bàn
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Autocomplete
              id="province"
              onChange={(event, value) => {
                setProvinceData(value);
                setDistrictData(null);
                setWardData(null);
              }}
              noOptionsText="Không có dữ liệu"
              options={dataAddress}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField {...params} label="Tỉnh/Thành phố" />
              )}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Autocomplete
              id="district"
              value={districtData}
              onChange={(event, value) => {
                setDistrictData(value);
                setWardData(null);
              }}
              noOptionsText="Không có dữ liệu"
              disabled={!provinceData}
              options={provinceData?.districts || []}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField {...params} label="Quận/Huyện" />
              )}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Autocomplete
              id="ward"
              value={wardData}
              onChange={(event, value) => setWardData(value)}
              disabled={!districtData}
              noOptionsText="Không có dữ liệu"
              options={districtData?.wards || []}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField {...params} label="Xã/Phường" />
              )}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Button
              variant="contained"
              onClick={() => dispatch(search({ data: dataSearch }))}
              fullWidth
              startIcon={<SearchIcon />}
              color="primary"
              sx={{ height: '100%' }}>
              Tìm kiếm
            </Button>
          </Grid>
        </Grid>
        <TableAddress />
      </Stack>
    </Container>
  );
};

export default SearchAddress;
