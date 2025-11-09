

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Products.css";

function Products() {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const items = [
    {
      id: "lipstick-petalglow",
      name: "PetalGlow Lipstick",
      price: 799,
      img: "https://i.pinimg.com/736x/d5/e5/b3/d5e5b369da2f1b77acb25b028ee81e01.jpg",
    },
    {
      id: "blush-blossom",
      name: "Blossom Blush Palette",
      price: 1299,
      img: "https://i.pinimg.com/736x/5f/e1/65/5fe165d0d0b40e94658062f50bbfa770.jpg",
    },
    {
      id: "foundation-rosegow",
      name: "RoseGlow Foundation",
      price: 1999,
      img: "https://i.pinimg.com/1200x/5d/a2/bf/5da2bf081218d8f9658b2d1bce9709f4.jpg",
    },
    {
      id: 'mascara-silk',
      name: 'Silk Lash Mascara',
      price: 699,
      category: 'Eyes',
      img: 'https://i.pinimg.com/736x/32/e4/75/32e475ae42ec4998056e184c04c45be5.jpg'
    },
    {
      id: 'eyeshadow-spark',
      name: 'Sparkle Eye Shadow Set',
      price: 1499,
      category: 'Eyes',
      img: 'https://i.pinimg.com/736x/4e/f6/97/4ef69735cb31604560144dd1dfbf88c0.jpg'
    },
    {
      id: 'highlighter-glow',
      name: 'Glow Highlighter Stick',
      price: 499,
      category: 'Face',
      img: 'https://i.pinimg.com/1200x/0a/fc/01/0afc012187d80e32e1eb576bff7a0d8b.jpg'
    },
    {
      id: 'primer-silk',
      name: 'Silken Face Primer',
      price: 1099,
      category: 'Base',
      img: 'https://i.pinimg.com/1200x/ae/59/fc/ae59fc9c3d2446f9701c32306049f303.jpg'
    },
    {
      id: 'lip-gloss',
      name: 'Floral Lip Gloss',
      price: 899,
      img: 'https://i.pinimg.com/1200x/77/ff/97/77ff979735d56b7470e771d221eea168.jpg'
    },
    {
      id: 'eyeliner-precision',
      name: 'Precision Eyeliner',
      price: 799,
      img: 'https://i.pinimg.com/736x/73/04/a2/7304a29f349337f5f5f7f2ce9bca77bd.jpg'
    },
    {
      id: 'setting-spray',
      name: 'Long-lasting Setting Spray',
      price: 599,
      img: 'https://i.pinimg.com/1200x/91/76/59/9176599446345964503cb75141da2023.jpg'
    },
    {
      id: 'contour-kit',
      name: 'Contour Kit',
      price: 1399,
      img: 'https://i.pinimg.com/1200x/ec/d9/09/ecd909cd531a64cff220d38f13695ef0.jpg'
    },
    {
      id: 'bronzer-glow',
      name: 'Glow Bronzer',
      price: 1199,
      img: 'https://i.pinimg.com/1200x/98/fa/9f/98fa9f3242b1193d7f847333f4542ba1.jpg'
    },
    {
      id: 'nail-polish-set',
      name: 'Nail Polish Set',
      price: 699,
      img: 'https://i.pinimg.com/736x/88/65/f1/8865f1b9d9a329adeefe7a70bc2c879d.jpg'
    },
    {
      id: 'powder-matte',
      name: 'Matte Setting Powder',
      price: 899,
      img: 'https://i.pinimg.com/1200x/7e/3f/e9/7e3fe917763fd1d2ac3c8622c0440e02.jpg'
    },
    {
      id: 'makeup-brush',
      name: 'Makeup Brush',
      price: 499,
      img: 'https://i.pinimg.com/736x/7f/40/59/7f40595b5b010789cbfca62ff6b31d04.jpg'
    },
    {
      id: 'eyebrow-gel',
      name: 'Eyebrow Gel',
      price: 599,
      img: 'https://i.pinimg.com/736x/9e/f8/b9/9ef8b98bc36e2876377e656b6f12e259.jpg'
    },
    {
      id: 'toner-refresh',
      name: 'Refreshing Toner',
      price: 799,
      img: 'https://i.pinimg.com/736x/ef/cd/94/efcd94104f7a386926ec5ae012b19101.jpg'
    },
    {
      id: 'moisturizer-hydra',
      name: 'Hydra Moisturizer',
      price: 999,
      img: 'https://i.pinimg.com/1200x/73/ce/40/73ce40501c69e97dc75c0e03cbb0e2f6.jpg'
    },
    {
      id: 'face-mask-glow',
      name: 'Glow Face Mask',
      price: 699,
      img: 'https://i.pinimg.com/736x/9d/ea/71/9dea71077e63a6b07128b43978937787.jpg'
    }
  ];

  const addToCart = (product) => {
    try {
      const raw = localStorage.getItem("localCart") || "[]";
      const cart = JSON.parse(raw);

      const existing = cart.find((it) => it.productId === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        cart.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.img,
        });
      }

      localStorage.setItem("localCart", JSON.stringify(cart));
      // small UX feedback
      alert(`${product.name} added to cart`);
    } catch (err) {
      console.error("addToCart error", err);
      alert("Could not add to cart");
    }
  };

  const buyNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "18px" }}>Our Products</h1>

      <div className="product-container">
        {items.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{formatter.format(p.price)}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
            <button onClick={() => buyNow(p)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
