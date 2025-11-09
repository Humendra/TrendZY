import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "TrendZY. - Admin",
    description: "TrendZY. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
