import { getAllProducts } from "@/lib/product/data";


const PopularProduct = async() => {
    const productData = await getAllProducts();
    console.log(productData)
    return (
        <div>
            {
                productData.map((product)=><div key={product._id}>{product.title}</div>)
            }
        </div>
    );
};

export default PopularProduct;