import { getAllProducts } from "@/lib/product/data";
import { ProductCard } from "./ProductCard";


const PopularProduct = async() => {
    const productData = await getAllProducts();
    console.log(productData)
    return (
        <div>
            {
                productData.map((product)=><ProductCard key={product._id}/>)
            }
        </div>
    );
};

export default PopularProduct;