import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

/* ✅ FULL MENU RESTORED (ALL ITEMS ADDED) */
const menuData = [
  // Hot Beverages
  { id: 1, name: "Chocolate Chai", category: "Hot Beverages", price: "₹10", image: "/images/Vanilla-Chai-Hot-Chocolate-1.webp" },
  { id: 2, name: "Adrak Chai", category: "Hot Beverages", price: "₹10", image: "/images/Adrak-masala-chai-1568x1045.jpeg" },
  { id: 3, name: "Masala Chai", category: "Hot Beverages", price: "₹20", image: "/images/Masala-Chai-.jpg" },
  { id: 4, name: "Rose Chai", category: "Hot Beverages", price: "₹15", image: "/images/1x1-rose-masala-chai-how-to-make-rose-tea-video-recipe.jpg" },
  { id: 5, name: "Paan Chai", category: "Hot Beverages", price: "₹20", image: "/images/paan-chai-thumb.jpg" },
  { id: 6, name: "Elaichi Chai", category: "Hot Beverages", price: "₹20", image: "/images/WhatsApp-Image-2023-11-30-at-8.20.48-AM-3.jpeg" },

  // Cold Beverages
  { id: 7, name: "Classic Cold Coffee", category: "Cold Beverages", price: "₹60", image: "/images/cold-coffee.jpg" },
  { id: 8, name: "Plain Cold Coffee", category: "Cold Beverages", price: "₹60", image: "/images/cold-coffee.jpg" },
  { id: 9, name: "Choco Cold Coffee", category: "Cold Beverages", price: "₹70", image: "/images/chocolate-iced-coffee-recipe-vivani-organic.png" },
  { id: 13, name: "MDC Special Cold Coffee", category: "Cold Beverages", price: "₹90", image: "/images/20140510_133410.jpg" },

  // Maggie
  { id: 17, name: "Plain Maggie", category: "Maggie", price: "₹40", image: "/images/Plain-maggie.webp" },
  { id: 18, name: "Double Masala Maggie", category: "Maggie", price: "₹50", image: "/images/Masala-Maggi-Recipe.jpg" },

  // Snacks
  { id: 22, name: "Maska Bun", category: "Bites", price: "₹25", image: "/images/maska3.jpg" },
];

function App() {
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  const [showQR, setShowQR] = useState(false);

  // Splash screen
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="splash-container">
        <h1 className="welcome">🙏 Namaste <span>Shamgarh</span></h1>
        <h2 className="sub-welcome">Welcome to <span>Medicine Chai Cafe ☕</span></h2>
        <p className="tagline">Medicine + Chai = <span>Therapy</span></p>
      </div>
    );
  }

  // Filter menu
  const filteredMenu =
    filter === "All" ? menuData : menuData.filter((item) => item.category === filter);

  // Add to cart
  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // Remove
  const removeFromCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing.qty === 1) {
      setCart(cart.filter((c) => c.id !== item.id));
    } else {
      setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty - 1 } : c)));
    }
  };

  // Total price
  const total = cart.reduce(
    (acc, curr) => acc + Number(curr.price.replace("₹", "")) * curr.qty,
    0
  );

  // API send
  const sendOrderToOwner = () => {
    if (cart.length === 0) return;

    const orderText = cart.map((c) => `${c.name} x${c.qty}`).join(", ");

    fetch(" https://angry-gifts-lay.loca.lt/api/sendOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: orderText,
        quantity: cart.length,
        total: total,
      }),
    })
      .then(() => alert("Order Sent to Owner!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-bg">

      {/* Header */}
      <header className="header">
        <h1>Medicine + Chai ☕</h1>
        <h3>= Therapy</h3>
        <div className="cart-info">🛒 {cart.length} items | ₹{total}</div>
      </header>

      {/* Filters */}
      <div className="filters">
        {["All", "Hot Beverages", "Cold Beverages", "Maggie", "Bites"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>{item.category}</p>

            <div className="price-cart">
              <span>{item.price}</span>

              {cart.find((c) => c.id === item.id) ? (
                <div className="qty-control">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{cart.find((c) => c.id === item.id).qty}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(item)}>
                  Add +
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* QR Screen */}
      {showQR && (
        <div className="qr-popup">
          <div className="qr-content">
            <h2>Scan to Pay ₹{total}</h2>

            <QRCodeCanvas
              value={`upi://pay?pa=7617283833@ybl&pn=Medicine%20Chai&am=${total}&cu=INR`}
              size={200}
            />

            {/* Confirm & Send Order */}
            <button className="add-btn" onClick={sendOrderToOwner}>
              Confirm & Send Order
            </button>

            <button className="close-btn" onClick={() => setShowQR(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Bottom Fixed Bar */}
      {cart.length > 0 && (
        <div className="cart-bar">
          <span>🛍️ {cart.length} items | ₹{total}</span>

          {/* 🔥 New Button — Send Directly to Owner */}
          <button onClick={sendOrderToOwner}>Send to Owner</button>

          {/* QR Button */}
          <button onClick={() => setShowQR(true)}>Proceed to Pay</button>
        </div>
      )}
    </div>
  );
}

export default App;
