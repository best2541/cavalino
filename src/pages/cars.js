import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CarsHead } from '../components/cars/CarsHead';
import { CarsTable } from '../components/cars/CarsTable';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { cars } from '../__mocks__/cars'

const Customers = () => (
  <>
    <Head>
      <title>
        รถ | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CarsHead />
        <Box sx={{ mt: 3 }}>
          <CarsTable customers={customers} cars={cars} />
        </Box>
      </Container>
    </Box>
  </>
);
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
