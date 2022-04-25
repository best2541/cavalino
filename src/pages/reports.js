import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ReportHead } from '../components/reports/ReportHead';
import { ReportTable } from '../components/reports/ReportTable';
import { DashboardLayout } from '../components/dashboard-layout';
import { reports } from 'src/__mocks__/report';

const Customers = () => (
    <>
        <Head>
            <title>
                ใบเสนอราคา
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
                <ReportHead />
                <Box sx={{ mt: 3 }}>
                    <ReportTable reports={reports} />
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
