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
  { id: 11, name: "Cold Coffee with Ice Cream", category: "Cold Beverages", price: "₹80", image: "/images/20140510_133410.jpg" },
  { id: 12, name: "Hazelnut Cold Coffee", category: "Cold Beverages", price: "₹80", image: "/images/hazelnut-iced-coffee-1-720x720.jpg" },
  { id: 13, name: "MDC Special Cold Coffee", category: "Cold Beverages", price: "₹90", image: "/images/20140510_133410.jpg" },
  { id: 14, name: "Oreo Shake", category: "Milkshakes", price: "₹90", image: "/images/oreo-milkshake-t1.jpg" },
  { id: 15, name: "Vanilla Shake", category: "Milkshakes", price: "₹99", image: "/images/vanilla-milkshake-fb-ig-5-1156x1156.jpg" },
  { id: 16, name: "Kitkat Shake", category: "Milkshakes", price: "₹99", image: "/images/Kitkat_Milk_Shake_Recipe_xdfmk_Pak101(dot)com.jpg" },
  { id: 17, name: "Plain Maggie", category: "Maggie", price: "₹40", image: "/images/Plain-maggie.webp" },
  { id: 18, name: "Double Masala Maggie", category: "Maggie", price: "₹50", image: "/images/Masala-Maggi-Recipe.jpg" },
  { id: 19, name: "Vegetable Maggie", category: "Maggie", price: "₹60", image: "/images/vegetable-maggi-noodles.jpg" },
  { id: 20, name: "Cheese Maggie", category: "Maggie", price: "₹70", image: "/images/cheese-maggie-noodles-instant-served-pan-topped-then-placed-over-rustic-wooden-background-selective-focus-224000423.jpg" },
  { id: 21, name: "Cheese Corn Maggie", category: "Maggie", price: "₹60", image: "/images/maxresdefault (1).jpg" },
  { id: 22, name: "Maska Bun", category: "Bites", price: "₹25", image: "/images/maska3.jpg" },
  { id: 23, name: "Garlic Bun", category: "Bites", price: "₹30", image: "/images/Korean bun on black plate.jpeg" },
  { id: 24, name: "Garlic Bread", category: "Bites", price: "₹30", image: "/images/homemade-garlic-bread-500x750.jpg" },
  { id: 25, name: "Cheese Garlic Bread", category: "Bites", price: "₹50", image: "/images/homemade-garlic-bread-500x750.jpg" },
  { id: 26, name: "Salted French Fries", category: "Bites", price: "₹50", image: "/images/French-Fries-french-fries-35339396-1600-1455.jpg" },
  { id: 27, name: "Peri Peri French Fries", category: "Bites", price: "₹60", image: "/images/French-Fries-french-fries-35339396-1600-1455.jpg" },
  { id: 28, name: "Garlic Shots", category: "Bites", price: "₹70", image: "/images/m36h0nk8_potato-cheese-shots_625x300_04_October_21.webp" },
  { id: 29, name: "Cheese Shots", category: "Bites", price: "₹70", image: "/images/m36h0nk8_potato-cheese-shots_625x300_04_October_21.webp" },
  { id: 30, name: "Loaded Fries", category: "Bites", price: "₹99", image: "/images/1984660106.jpeg" },
  { id: 31, name: "Veg Burger", category: "Burger", price: "₹99", image: "/images/Easy-Veggie-Burger-Recipe-Vegan-Healthy-11.webp" },
  { id: 32, name: "Cheese Burger", category: "Burger", price: "₹99", image: "/images/1984660106.jpeg" },
];

function App() {
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // 🌟 Splash Animation
  if (showSplash) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url('/images/huma-h-yardim-t8PobHUbMpY-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "700",
            textShadow: "0 0 15px rgba(255, 200, 150, 0.8)",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          🙏 Namaste <span style={{ color: "#f5b041" }}>Shamgarh</span>
        </h1>
        <p
          style={{
            fontSize: "30px",
            marginTop: "15px",
            color: "#f9f9f9",
            fontWeight: "500",
            textShadow: "0 0 10px rgba(255,255,255,0.6)",
            animation: "fadeInUp 3s ease-in-out",
          }}
        >
          Welcome To <span style={{ color: "#f1c40f" }}>Medicine Chai Cafe</span> ☕
        </p>

        


        

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
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
        backgroundImage: "url('/images/shubham-dhage-zzJO0o4M184-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#796c6cff",
          backgroundImage: "url('/images/Gemini_Generated_Image_a1ogy5a1ogy5a1og.png')",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "left" }}>
  <h1 style={{ margin: 0 }}>Medicine + Chai ☕</h1>
  <h2 className="tagline">= Therapy</h2>
</div>

        <div>
          🛒 <b>{cart.length}</b> items | <b>₹{total}</b>
        </div>
      </header>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        {["All", "Hot Beverages", "Cold Beverages", "Milkshakes", "Maggie", "Bites", "Burger"].map(
          (cat) => (
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
          )
        )}
      </div>

      {/* Menu */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px 15px" }}>
              <h3>{item.name}</h3>
              <p style={{ color: "gray" }}>{item.category}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{item.price}</span>
                <button
                  onClick={() => addToCart(item)}
                  style={{
                    background: "#c72e2e",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QR Popup */}
      {showQR && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px 35px",
              borderRadius: "12px",
              textAlign: "center",
              color: "black",
              width: "90%",
              maxWidth: "400px",
            }}
          >
            <h2>Scan or Choose App to Pay ₹{total}</h2>

            <QRCodeCanvas
              value={`upi://pay?pa=7617283833@ybl&pn=Medicine%20Chai%20Cafe&am=${total}&cu=INR`}
              size={220}
            />

            <p style={{ marginTop: "10px", fontWeight: "bold" }}>Or Pay via:</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "10px",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <a
                href={`upi://pay?pa=7617283833@ybl&pn=Medicine%20Chai%20Cafe&am=${total}&cu=INR`}
                style={{
                  background: "#4285F4",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Google Pay
              </a>

              <a
                href={`upi://pay?pa=7617283833@ybl&pn=Medicine%20Chai%20Cafe&am=${total}&cu=INR`}
                style={{
                  background: "#5C2D91",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                PhonePe
              </a>

              <a
                href={`upi://pay?pa=7617283833@ybl&pn=Medicine%20Chai%20Cafe&am=${total}&cu=INR`}
                style={{
                  background: "#00B9F1",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Paytm
              </a>
            </div>

            <button
              onClick={() => setShowQR(false)}
              style={{
                marginTop: "20px",
                background: "#c72e2e",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Cart */}
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            background: "#fff",
            borderTop: "2px solid #c72e2e",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            🛍️ <b>{cart.length}</b> items | <b>₹{total}</b>
          </span>
          <button
            onClick={() => setShowQR(true)}
            style={{
              background: "#c72e2e",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
