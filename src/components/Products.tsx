import { useEffect, useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { productDetails as localProductDetails } from "../lib/productDetails";
import { BACKEND_URL } from "../lib/config";

type Review = {
    name: string;
    rating: number;
    review: string;
};

type ProductDetails = {
    name: string;
    price: string;
    whatItDoes: string;
    includedAndRecommended: string[];
    howMuchCanYouEarn: string;
    installationProcess: string[];
    images: string[];
    earnImage: string;
    reviews: Review[];
};

type ProductDetailsMap = {
    [key: string]: ProductDetails;
};

function Products() {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({ name: "", description: "", price: "" });
    const [localProduct, setLocalProduct] = useState<ProductDetails | null>(null);

    useEffect(() => {
        if (!productId) {
            alert("No product id on params");
            return;
        }

        const fetchProduct = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/product/fetch/${productId}`);
                const data = await response.json();
                if (response.ok) {
                    setProduct(data.product);
                } else {
                    console.error("Error fetching product:", data.message);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        const fetchLocalProductDetails = () => {
            const productData = localProductDetails as ProductDetailsMap;
            const productInfo = productData[productId];
            if (productInfo) {
                setLocalProduct(productInfo);
            } else {
                console.error("Product not found in local data");
            }
        };

        fetchLocalProductDetails();
        fetchProduct();
    }, [productId]);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ));
    };

    function CheckOutSave() {
        if (!productId) return;
        localStorage.setItem("productName", product.name);
        localStorage.setItem("productPrice", product.price);
        localStorage.setItem("quantity", quantity.toString());
        localStorage.setItem("productId", productId);
        navigate("/checkout");
    }


    return (
        <div className="min-h-screen bg-[#020817] text-white p-10 sm:p-10 ">
            <main className="container mx-auto">

                {/* Product Images & Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Images */}
                    <div className="space-y-4 pt-10">
                        <div className="bg-[#0f1729] p-6 sm:p-8 rounded-xl">
                            <img src={localProduct?.images[0]} alt="Product Image" className="w-full rounded-lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {localProduct?.images.slice(1, 3).map((img, index) => (
                                <div key={index} className="bg-[#0f1729] p-4 rounded-xl">
                                    <img src={img} alt={`Product Image ${index + 2}`} className="w-full rounded-lg" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6 pt-12">
                        <h2 className="text-2xl sm:text-3xl font-bold">{product.name}</h2>
                        <p className="text-xl font-bold">Rs. {product.price}</p>
                        {/*<h2 className="text-2xl sm:text-3xl font-bold">{localProduct?.name}</h2>*/}
                        {/*<p className="text-xl font-bold">Rs. {localProduct?.price}</p>*/}
                        <p className="text-gray-400">Free shipping on all orders</p>
                        <div className="flex items-center space-x-2">{renderStars(5)} <span className="text-gray-400">(128)</span></div>
                        <div className="flex items-center space-x-4">
                            <label className="text-gray-400">Quantity</label>
                            <select
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="bg-[#0f1729] border border-gray-700 rounded-lg px-4 py-2"
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700" onClick={CheckOutSave}>
                            Go to Checkout
                        </button>
                    </div>
                </div>

                {/* Product Description */}
                <section className="mt-12">
                    <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                    <div className="bg-[#0f1729] rounded-xl p-6">
                        <h4 className="text-lg font-semibold">What it does?</h4>
                        <p className="text-gray-400">{localProduct?.whatItDoes}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2 pt-2">What's included & recommended parts:</h4>
                        <ul className="text-gray-400 list-disc list-inside space-y-1">
                            {localProduct?.includedAndRecommended.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Earning Potential */}
                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold">How Much Can You Earn?</h3>
                        <p className="text-gray-400">{localProduct?.howMuchCanYouEarn}</p>
                        {/*<button className="text-blue-500 hover:text-blue-400 flex items-center">*/}
                        {/*    Explore Mining Rewards <ArrowRight className="w-4 h-4 ml-2" />*/}
                        {/*</button>*/}
                    </div>
                    <div className="flex justify-center">
                        <img src={localProduct?.earnImage} alt="Earning Potential" className="rounded-lg w-72 sm:w-96" />
                    </div>
                </section>

                {/* Installation Guide */}
                <section className="mt-12">
                    <h3 className="text-2xl font-bold mb-4">Installation Process</h3>
                    <p className="text-gray-400">{localProduct?.installationProcess.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}</p>
                </section>

                {/* Product Reviews */}
                <section className="mt-12">
                    <h3 className="text-2xl font-bold mb-4">Product Reviews</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {localProduct?.reviews.map((review, index) => (
                            <div key={index} className="bg-[#0f1729] rounded-xl p-6">
                                <div className="flex items-center space-x-2 mb-4">{renderStars(review.rating)}</div>
                                <p className="text-gray-400">{review.review}</p>
                                <div className="mt-4 flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">{review.name.charAt(0)}</span>
                                    </div>
                                    <span className="font-medium">{review.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Products;
