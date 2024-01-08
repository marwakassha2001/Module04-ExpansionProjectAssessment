import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    let { productID } = useParams();



    useEffect(() => {
        axios.get(`http://localhost:5000/product/&{id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [productID]);


return (
    <>

{product ? <p>{product.name}</p> : <p>Loading...</p>}

    </>


)


}
export default ProductDetails;