import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

const menuData = [
  { id: 1, name: "Chocolate Chai", category: "Hot Beverages", price: "₹10", image: "/images/Vanilla-Chai-Hot-Chocolate-1.webp" },
  { id: 2, name: "Adrak Chai", category: "Hot Beverages", price: "₹10", image: "/images/Adrak-masala-chai-1568x1045.jpeg" },
  { id: 3, name: "Masala Chai", category: "Hot Beverages", price: "₹20", image: "/images/Masala-Chai-.jpg" },
  { id: 4, name: "Rose Chai", category: "Hot Beverages", price: "₹15", image: "/images/1x1-rose-masala-chai-how-to-make-rose-tea-video-recipe.jpg" },
  { id: 5, name: "Paan Chai", category: "Hot Beverages", price: "₹20", image: "/images/paan-chai-thumb.jpg" },
  { id: 6, name: "Elaichi Chai", category: "Hot Beverages", price: "₹20", image: "/images/WhatsApp-Image-2023-11-30-at-8.20.48-AM-3.jpeg" },
  { id: 7, name: "Green Tea", category: "Hot Beverages", price: "₹50", image: "/images/Green-Tea.webp" },
  { id: 8, name: "Plain Cold Coffee", category: "Cold Beverages", price: "₹60", image: "/images/cold-coffee.jpg" },
  { id: 9, name: "Choco Cold Coffee", category: "Cold Beverages", price: "₹70", image: "/images/chocolate-iced-coffee-recipe-vivani-organic.png" },
  { id: 10, name: "Strong Cold Coffee", category: "Cold Beverages", price: "₹70", image: "/images/istockphoto-542212056-612x612.jpg" },
  { id: 11, name: "Oreo Shake", category: "Milkshakes", price: "₹90", image: "/images/oreo-milkshake-t1.jpg" },
  { id: 12, name: "Vanilla Shake", category: "Milkshakes", price: "₹99", image: "/images/vanilla-milkshake-fb-ig-5-1156x1156.jpg" },
  { id: 13, name: "Kitkat Shake", category: "Milkshakes", price: "₹99", image: "/images/Kitkat_Milk_Shake_Recipe_xdfmk_Pak101(dot)com.jpg" },
  { id: 14, name: "Plain Maggie", category: "Maggie", price: "₹40", image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg" },
  { id: 15, name: "Double Masala Maggie", category: "Maggie", price: "₹50", image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg" },
  { id: 16, name: "Vegetable Maggie", category: "Maggie", price: "₹60", image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg" },
  { id: 17, name: "Cheese Maggie", category: "Maggie", price: "₹70", image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg" },
  { id: 18, name: "Cheese Corn Maggie", category: "Maggie", price: "₹60", image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg" },
  { id: 19, name: "Maska Bun", category: "Bites", price: "₹25", image: "/images/maska3.jpg" },
  { id: 20, name: "Garlic Bun", category: "Bites", price: "₹30", image: "/images/Korean bun on black plate.jpeg" },
  { id: 21, name: "Garlic Bread", category: "Bites", price: "₹30", image: "/images/homemade-garlic-bread-500x750.jpg" },
  { id: 22, name: "Cheese Garlic Bread", category: "Bites", price: "₹50", image: "/images/homemade-garlic-bread-500x750.jpg" },
  { id: 23, name: "Salted French Fries", category: "Bites", price: "₹50", image: "/images/French-Fries-french-fries-35339396-1600-1455.jpg" },
  { id: 24, name: "Peri Peri French Fries", category: "Bites", price: "₹60", image: "/images/French-Fries-french-fries-35339396-1600-1455.jpg" },
  { id: 25, name: "Garlic Shots", category: "Bites", price: "₹70", image: "/images/m36h0nk8_potato-cheese-shots_625x300_04_October_21.webp" },
  { id: 26, name: "Cheese Shots", category: "Bites", price: "₹70", image: "/images/m36h0nk8_potato-cheese-shots_625x300_04_October_21.webp" },
  { id: 27, name: "Loaded Fries", category: "Bites", price: "₹99", image: "/images/1984660106.jpeg" },
];

function App() {
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url('/')",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "45px",
          fontWeight: "bold",
          flexDirection: "column",
        }}
      >
        🙏 Namaste Shamgarh ☕
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Welcome to Medicine Chai Café
        </p>
      </div>
    );
  }

  const filteredMenu =
    filter === "All" ? menuData : menuData.filter((item) => item.category === filter);

  const addToCart = (item) => setCart([...cart, item]);

  const total = cart.reduce((acc, curr) => acc + Number(curr.price.replace("₹", "")), 0);

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundImage: "url('/images/istockphoto-542212056-612x612.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#c72e2e",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>☕ Medicine Chai Café</h1>
        <div>🛒 <b>{cart.length}</b> items | <b>₹{total}</b></div>
      </header>

      {/* Filters */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "20px", flexWrap: "wrap" }}>
        {["All", "Hot Beverages", "Cold Beverages", "Milkshakes", "Maggie", "Bites"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: filter === cat ? "2px solid #c72e2e" : "1px solid gray",
              background: filter === cat ? "#ffe6e8" : "white",
              color: filter === cat ? "#c72e2e" : "black",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
        {filteredMenu.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "10px 15px" }}>
              <h3>{item.name}</h3>
              <p style={{ color: "gray" }}>{item.category}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "bold" }}>{item.price}</span>
                <button onClick={() => addToCart(item)} style={{ background: "#c72e2e", color: "white", border: "none", padding: "6px 10px", borderRadius: "6px" }}>Add +</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QR Payment Popup */}
      {showQR && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.85)", display: "flex", justifyContent: "center", alignItems: "center", color: "white", zIndex: 999 }}>
          <div style={{ background: "white", padding: "25px 35px", borderRadius: "12px", textAlign: "center", color: "black" }}>
            <h2>Scan & Pay ₹{total}</h2>
            <QRCodeCanvas value={`upi://pay?pa=medicinechai@oksbi&pn=Medicine%20Chai%20Cafe&am=${total}&cu=INR`} size={220} />
            <a href={`upi://pay?pa=medicinechai@oksbi&pn=Medicine%20Chai%20Cafe&am=${total}&cu=INR`} style={{ display: "block", marginTop: "10px", color: "#c72e2e" }}>Open UPI App</a>
            <button onClick={() => setShowQR(false)} style={{ marginTop: "15px", background: "#c72e2e", color: "white", border: "none", padding: "8px 16px", borderRadius: "6px" }}>Close</button>
          </div>
        </div>
      )}

      {/* Cart */}
      {cart.length > 0 && (
        <div style={{ position: "fixed", bottom: 0, width: "100%", background: "#fff", borderTop: "2px solid #c72e2e", padding: "15px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>🛍️ <b>{cart.length}</b> items | <b>₹{total}</b></span>
          <button onClick={() => setShowQR(true)} style={{ background: "#c72e2e", color: "white", padding: "8px 16px", border: "none", borderRadius: "5px" }}>Proceed to Pay</button>
        </div>
      )}
    </div>
  );
}

export default App;
