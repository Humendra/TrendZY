import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "TrendZY. - Store Dashboard",
    description: "TrendZY. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
