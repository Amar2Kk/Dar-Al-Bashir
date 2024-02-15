import prismaDB from "@/lib/prismaDB";
import { BillboardClient } from "./components/client";

interface BillboardPageProps {
    params: { storeId: string };
}

const BillboardPage: React.FC<BillboardPageProps> = async ({ params }) => {
    const store = await prismaDB.store.findFirst({
        where: { id: params.storeId },
    });
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient/>
            </div>
        </div>
    );
};

export default BillboardPage;
