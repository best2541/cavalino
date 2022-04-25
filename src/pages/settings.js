import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { TextRemark } from '../components/settings/TextRemark';
import { Sign } from '../components/settings/Sign';

const Settings = () => (
  <>
    <Head>
      <title>
        ตั้งค่า
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          ตั้งค่า
        </Typography>
        <Sign />
        <Box sx={{ pt: 3 }}>
          <TextRemark />
        </Box>
      </Container>
    </Box>
  </>
);

Settings.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Settings;
