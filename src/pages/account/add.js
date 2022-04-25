import React from 'react'
import { DashboardLayout } from '../../components/dashboard-layout';
import AddForm from 'src/components/account/add/AddForm';
const add = () => {
    return (
        <AddForm />
    )
}

add.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default add