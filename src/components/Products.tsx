import  { useEffect, useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import {productDetails as localProductDetails} from '../lib/productDetails'
import { BACKEND_URL } from '../lib/config';


// Define the type for the product details
type ProductDetails = {
    whatItDoes: string;
    includedAndRecommended: string[];
    howMuchCanYouEarn: string;
    installationProcess: string;
    images: string[];
    earnImage:string;
};

// Define the structure of `localProductDetails`
type ProductDetailsMap = {
    [key: string]: ProductDetails; // Indexable by string keys
};


function Products() {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [productid,setproductid] = useState<string|undefined>(undefined);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
    });

    const [localProduct, setLocalProduct] = useState<ProductDetails | null>(null);

    

    const { productId } = useParams(); 
    useEffect(() => {
        if (productId) {
            setproductid(productId);
        }
    }, [productId]);

    useEffect(() => {
        if(!productId){
            alert("No product id on params")
            return
        }
        // Fetch product details when the page loads
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/product/fetch/${productId}`);
                const data = await response.json();

                if (response.ok) {
                    setProduct(data.product); // Set product details
                } else {
                    console.error("Error fetching product:", data.message);
                }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error:any) {
                console.error("Error fetching product:", error.message);
            }
        };

        const fetchLocalProductDetails = () => {
            try {
                // Use the imported `productDetails` object
                const productData = localProductDetails as ProductDetailsMap; 
                const productInfo = productData[productId]; // Cast productId to string
                if (productInfo) {
                    setLocalProduct(productInfo);
                } else {
                    console.error("Product not found in local data");
                }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error:any) {
                console.error("Error fetching product details:", error.message);
            }
        };

        fetchLocalProductDetails()
        fetchProduct();
    }, [productId]);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
            />
        ));
    };

    


    function CheckOutSave () {
        try {
            if(!productid){
                return
            }
            localStorage.setItem('productName',product.name);
            localStorage.setItem('productPrice',product.price);
            localStorage.setItem('quantity',quantity.toString());
            localStorage.setItem('productId',productid ||"");

            navigate('/checkout')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            console.log(error.message)
        }
    }

    return (
        <div className="min-h-screen bg-[#020817] text-white">
            {/* Main Content */}
            <main className="container mx-auto px-6 py-8">
                {/* Product Section */}
                <div className="grid grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4 mt-6">
                        <div className="bg-[#0f1729] p-8 rounded-xl">
                            <img
                                src={`${localProduct?.images[0]}`}
                                alt={`${product.name} image1`}
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0f1729] p-4 rounded-xl">
                                <img
                                    src={`${localProduct?.images[1]}`}
                                    alt={`${product.name} image2`}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="bg-[#0f1729] p-4 rounded-xl">
                                <img
                                    src={`${localProduct?.images[2]}`}
                                    alt={`${product.name} image3`}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <h2 className="mt-12 text-3xl font-bold">{product.name}</h2>
                        <div className="space-y-2">
                            <p className="text-2xl font-bold">Rs. {product.price}</p>
                            <p className="text-gray-400">Free shipping on all orders</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            {renderStars(5)}
                            <span className="text-gray-400">(128)</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <label className="text-gray-400">Quantity</label>
                                <select
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="bg-[#0f1729] border border-gray-700 rounded-lg px-4 py-2"
                                >
                                    {[1,2,3,4,5].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
        
                        </div>
                        <div className="space-y-3">
                            <button className="w-full bg-[#0f1729] border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800"
                            onClick={CheckOutSave}>
                                Go to Checkout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                <section className="mt-16">
                    <h3 className="text-2xl font-bold mb-6">Product Description</h3>
                    <div className="bg-[#0f1729] rounded-xl p-6 space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">What it does?</h4>
                            <p className="text-gray-400">
                              {localProduct?.whatItDoes}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">What's included & recommended parts:</h4>
                            <ul className="text-gray-400 list-disc list-inside space-y-1">
                            {localProduct?.includedAndRecommended.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How Much Can You Earn Section */}
                <section className="mt-16 grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">How Much Can You Earn?</h3>
                        <p className="text-gray-400">
                         {localProduct?.howMuchCanYouEarn}
                        </p>
                        <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-400">
                            <span>Explore Mining Rewards</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-transparent rounded-full p-8">
                            <img src={`${localProduct?.earnImage}`}></img>
                        </div>
                    </div>
                </section>

                {/* Installation Process */}
                <section className="mt-16">
                    <h3 className="text-2xl font-bold mb-6">Installation Process?</h3>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-[#0f1729] rounded-xl p-6">
                            {/* Add installation process illustration here */}
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                              {localProduct?.installationProcess}
                            </p>
                            <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-400">
                                <span>See the Installation Guide</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="mt-16">
                    <h3 className="text-2xl font-bold mb-6">Product Reviews</h3>
                    <div className="grid grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((review) => (
                            <div key={review} className="bg-[#0f1729] rounded-xl p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    {renderStars(5)}
                                </div>
                                <p className="text-gray-400">
                                    Lorem ipsum dolor amet, consectetur adipiscing elit. Nam
                                    hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                                    purus rhoncus pulvinar aliquam.
                                </p>
                                <div className="mt-4 flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                                    <span className="font-medium">Random Person</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#0f1729] mt-16 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-bold mb-4">Block Store</h4>
                            <div className="flex space-x-2 mt-4">
                                {renderStars(5)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">COMPANY</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">HELP</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">FAQ</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Products;