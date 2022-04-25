import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AccountTable } from '../components/account/AccountTable';
import { AccountHeader } from '../components/account/AccountHeader';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Customers = () => (
  <>
    <Head>
      <title>
        ผู้ใช้ระบบ
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
        <AccountHeader />
        <Box sx={{ mt: 3 }}>
          <AccountTable customers={customers} />
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
