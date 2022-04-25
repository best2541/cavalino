import AddForm from 'src/components/reports/add/AddForm';
import { DashboardLayout } from '../../components/dashboard-layout';

const add = () => {
    return (
        <>
            <AddForm />
        </>
    )
}
add.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);
export default add