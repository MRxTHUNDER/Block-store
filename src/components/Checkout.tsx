import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BACKEND_URL } from "../lib/config";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const navigate = useNavigate();

  const [productName, setProductName] = useState<string | undefined>();
  const [price, setPrice] = useState<string | undefined>();
  const [quantity, setQuantity] = useState<string | undefined>();
  const [productId, setProductId] = useState<string | undefined>();
  const [coupan, setCoupan] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [discount,setDiscount] = useState<string>('0');

  useEffect(() => {
    const name = localStorage.getItem("productName");
    consgit t price = localStorage.getItem("productPrice");
    const quantity = localStorage.getItem("quantity");
    const productId = localStorage.getItem("productId");

    if (name) setProductName(name);
    if (price) setPrice(price);
    if (quantity) setQuantity(quantity);
    if (productId) setProductId(productId);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(price || "0") * parseInt(quantity || "0", 10);
    return (subtotal - Number(discount)).toFixed(2); // Total after discount
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Order payload matching Zod schema
    const orderPayload = {
      name: productName || "Sample Order", // Default to 'Sample Order' if name is undefined
      price: price || "0",
      productId: productId || "",
      quantity: quantity || "1",
      coupan,
      discount: discount, // Default discount as string
       // Default discount
      deliveryFee: "Free", // Default delivery fee
      subTotal: (
        parseFloat(price || "0") * parseInt(quantity || "0", 10)
      ).toFixed(2), // Subtotal
      total: calculateTotal(), // Total after discount
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      apartment: formData.apartment,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      country: formData.country,
    };

    try {
      const response = await fetch(`${BACKEND_URL}/api/order/place`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Order placed successfully!");
      } else {
        setError(data.message || "Failed to place order");
      }
    } catch (err) {
      setError("An error occurred while placing the order");
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(()=>{
      alert("Our Executive will contact you soon");
      navigate('/')
      },2000)
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] p-10">
      {/*<Navbar />*/}

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Address Form */}
          <div className="bg-[#0A1123] p-6 rounded-lg border border-gray-800">
            <h2 className="text-white text-2xl font-semibold mb-6">
              Shipping Address
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="apartment"
                placeholder="Apt/Suite"
                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.apartment}
                onChange={handleInputChange}
                required
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input
                type="text"
                name="country"
                placeholder="Country"
                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Have an Account?{" "}
                <a href="#" className="text-blue-500 hover:text-blue-400">
                  Log in
                </a>
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-[#0A1123] p-6 rounded-lg border border-gray-800">
            <h2 className="text-white text-2xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>
                  {productName}  ×  {quantity}
                </span>
                <span>Rs. {price}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-300">Coupon Code</span>
              <input
                placeholder="Enter your coupan here"
                id="coupan"
                className="p-2 bg-white text-black"
                name="coupan"
                onChange={(e) => {
                  setCoupan(e.target.value);
                  if(e.target.value==='FIRSTORDER'){
                    setDiscount('100')
                  } else {
                    setDiscount('0')
                  }
                }}
              ></input>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>Rs. {parseFloat(price || "0") * parseInt(quantity || "0", 10)}</span>
              </div>
              {
                discount !== '0'?
              <div className="flex justify-between">
                <span className="text-gray-300">Discount (- 100)</span>
                <span className="text-blue-500">-Rs. {discount}</span>
              </div>
              :
              null
}
              <div className="flex justify-between text-gray-300">
                <span>Delivery Fee</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-white font-semibold text-lg">
                <span>Total</span>
                <span>Rs. {calculateTotal()}</span>
              </div>
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {successMessage && (
              <p className="text-green-500 text-center mb-4">
                {successMessage}
              </p>
            )}

            <div className="space-y-3">
              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex items-center justify-center space-x-2"
              >
                <span>Place order</span>
                <ArrowRight size={20} />
              </button>

              {/*<button className="w-full bg-transparent border border-gray-700 hover:border-gray-600 text-white py-3 rounded-md flex items-center justify-center space-x-2">*/}
              {/*    <span>Credit/Debit Card</span>*/}
              {/*    <CreditCard size={20} />*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </main>

      {/*<Footer />*/}
    </div>
  );
}

export default Checkout;
