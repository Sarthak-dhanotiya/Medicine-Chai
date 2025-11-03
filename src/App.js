import { useState, useEffect } from "react";


const menuData = [
  {
    id: 1,
    name: "Chocl Chai",
    category: "Hot Beverages",
    price: "₹10",
    image:
      "/images/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector (1).jpg",
  },
  {
    id: 2,
    name: "Adrak Chai",
    category: "Hot Beverages",
    price: "₹10",
    image:
      "/images/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector (1).jpg",
  },
  {
    id: 3,
    name: "Masala Chai",
    category: "Hot Beverages",
    price: "₹20",
    image:
      "/images/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector (1).jpg",
  },
  {
    id: 4,
    name: "Rose Chai",
    category: "Hot Beverages",
    price: "₹15",
    image:
      "/images/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector (1).jpg",
  },
  {
    id: 5,
    name: "Paan Chai",
    category: "Hot Beverages",
    price: "₹20",
    image:
      "/images/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector (1).jpg",
  },
  {
    id: 6,
    name: "Elaichi Chai",
    category: "Hot Beverages",
    price: "₹20",
    image:
      "/images/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector (1).jpg",
  },
  {
    id: 7,
    name: "Green Tea",
    category: "Hot Beverages",
    price: "₹50",
    image:
      "/images/simple-and-hot-tea-logo-design-template-tea-cup-logo-design-free-vector (1).jpg",
  },
  {
    id: 8,
    name: "Plain Cold Coffee",
    category: "Cold Beverages",
    price: "₹60",
    image: "/images/istockphoto-542212056-612x612.jpg",
  },
  {
    id: 9,
    name: "Choco Cold Coffee",
    category: "Cold Beverages",
    price: "₹70",
    image: "/images/istockphoto-542212056-612x612.jpg",
  },
  {
    id: 10,
    name: "Strong Cold Coffee",
    category: "Cold Beverages",
    price: "₹70",
    image: "/images/istockphoto-542212056-612x612.jpg",
  },
  {
    id: 11,
    name: "Oreo Shake",
    category: "Milkshakes",
    price: "₹90",
    image: "/images/oreo-milkshake-t1.jpg",
  },
  {
    id: 12,
    name: "Vanilla Shake",
    category: "Milkshakes",
    price: "₹99",
    image: "/images/vanilla-milkshake-fb-ig-5-1156x1156.jpg",
  },
  {
    id: 13,
    name: "Kitkat Shake",
    category: "Milkshakes",
    price: "₹99",
    image: "/images/Kitkat_Milk_Shake_Recipe_xdfmk_Pak101(dot)com.jpg",
  },
  {
    id: 14,
    name: "Plain Maggie",
    category: "Maggie",
    price: "₹40",
    image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg",
  },
  {
    id: 15,
    name: "Double Masala Maggie",
    category: "Maggie",
    price: "₹50",
    image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg",
  },
  {
    id: 16,
    name: "Vegetable Maggie",
    category: "Maggie",
    price: "₹60",
    image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg",
  },
  {
    id: 17,
    name: "Cheese Maggie",
    category: "Maggie",
    price: "₹70",
    image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg",
  },
  {
    id: 18,
    name: "Cheese Corn Maggie",
    category: "Maggie",
    price: "₹60",
    image: "/images/71d6db959ed3f8e47e7ef8ccbf74ea7f.jpg",
  },
  {
    id: 19,
    name: "Maska Bun",
    category: "Bites",
    price: "₹25",
    image: "/images/maska3.jpg",
  },
  {
    id: 20,
    name: "Garlic Bun",
    category: "Bites",
    price: "₹30",
    image: "/images/Korean bun on black plate.jpeg",
  },
  {
    id: 21,
    name: "Garlic Bread",
    category: "Bites",
    price: "₹30",
    image: "/images/homemade-garlic-bread-500x750.jpg",
  },
  {
    id: 22,
    name: "Cheese Garlic Bread",
    category: "Bites",
    price: "₹50",
    image: "/images/homemade-garlic-bread-500x750.jpg",
  },
  {
    id: 23,
    name: "Salted French Fries",
    category: "Bites",
    price: "₹50",
    image: "/images/French-Fries-french-fries-35339396-1600-1455.jpg",
  },
  {
    id: 24,
    name: "Peri Peri French Fries",
    category: "Bites",
    price: "₹60",
    image: "/images/French-Fries-french-fries-35339396-1600-1455.jpg",
  },
  {
    id: 25,
    name: "Garlic Shots",
    category: "Bites",
    price: "₹70",
    image: "/images/m36h0nk8_potato-cheese-shots_625x300_04_October_21.webp",
  },
  {
    id: 26,
    name: "Cheese Shots",
    category: "Bites",
    price: "₹70",
    image: "/images/m36h0nk8_potato-cheese-shots_625x300_04_October_21.webp",
  },
  {
    id: 27,
    name: "Loaded Fries",
    category: "Bites",
    price: "₹99",
    image: "/images/1984660106.jpeg",
  },
];

function App() {
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  const [showQR, setShowQR] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // show for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url('/images/image1.wep')", 
          backgroundColor: "#c72e2e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "45px",
          fontWeight: "bold",
          flexDirection: "column",
          transition: "opacity 1s ease-in-out",
        }}
      >
        🙏 Namaste Shamgarh ☕
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Welcome to Medicine Chai Café
        </p>
      </div>
    );
  }

  // === Main Website ===
  const filteredMenu =
    filter === "All"
      ? menuData
      : menuData.filter((item) => item.category === filter);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce(
    (acc, curr) => acc + Number(curr.price.replace("₹", "")),
    0
  );

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundImage:
          "url('/images/istockphoto-542212056-612x612.jpg?auto=format&fit=crop&w=1500&q=80')",
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
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          ☕ Medicine Chai Café
        </h1>
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
        {[
          "All",
          "Hot Beverages",
          "Cold Beverages",
          "Milkshakes",
          "Maggie",
          "Bites",
          "Burger",
          "Pizza",
          "Sandwich",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: filter === cat ? "2px solid #c72e2e" : "1px solid gray",
              background: filter === cat ? "#ffe6e8" : "white",
              cursor: "pointer",
              color: filter === cat ? "#c72e2e" : "black",
              fontWeight: "bold",
            }}
          >
            {cat}
          </button>
        ))}

        {showQR && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: "white",
        padding: "20px 30px",
        borderRadius: "10px",
        textAlign: "center",
        color: "black",
      }}
    >
      <h2>Scan & Pay ₹{total}</h2>
      <img
        src="/images/9a4bbc20-c73e-46de-98dc-5c92fca89a69.jpg"
        alt="Payment QR"
        style={{ width: "250px", marginTop: "15px", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "10px", fontSize: "14px" }}>
        Please scan the QR code to complete your payment.
      </p>
      <button
        onClick={() => setShowQR(false)}
        style={{
          marginTop: "15px",
          background: "#c72e2e",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  </div>
)}

      </div>

      {/* Menu Cards */}
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
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px 15px" }}>
              <h3 style={{ margin: "5px 0" }}>{item.name}</h3>
              <p style={{ color: "gray", margin: "5px 0" }}>{item.category}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
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
                    cursor: "pointer",
                  }}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredMenu.length === 0 && (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              color: "gray",
              fontSize: "18px",
            }}
          >
            No items found 🍵
          </p>
        )}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
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
    cursor: "pointer",
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
