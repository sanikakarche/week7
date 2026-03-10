import React from "react";
import useProducts from "../../hooks/UseProducts";
import ProductCard from "../ProductCard/ProductCard";

function ProductList(){

const products = useProducts();

return(

<div>

{products.map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

);

}

export default ProductList;