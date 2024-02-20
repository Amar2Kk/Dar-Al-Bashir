import prismaDB from "@/lib/prismaDB";
import { ProductForm } from "./components/product-form";

interface NewProductPageProps {
    params: { productId: string };
}

const NewProductPage: React.FC<NewProductPageProps> = async ({ params }) => {
    const product = await prismaDB.product.findUnique({
        where: { id: params.productId },
        include: {
            images: true,
        },
    });
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm initialData={product} />
            </div>
        </div>
    );
};

export default NewProductPage;
