// SEO + User Engagement Enhancer for Belovedbuy Products

document.addEventListener("DOMContentLoaded", () => {
  const productData = {
    "tozo-a1": {
      name: "TOZO A1 Wireless Earbuds Bluetooth 5.3",
      description: "Lightweight IPX5 waterproof earbuds with AI call mic, immersive bass sound, 32 EQ presets, and long battery life.",
      price: "$19.99",
      rating: "4.3",
      reviewCount: "84296",
      image: "https://c.media-amazon.com/images/I/71Ilitn6B+L._AC_SX679_.jpg",
      link: "https://amzn.to/3YyWFfr"
    },
    "redthunder-k10": {
      name: "RedThunder K10 Gaming Keyboard & Mouse Combo",
      description: "RGB backlit mechanical-feel keyboard with 7D 7200 DPI mouse and ergonomic leather wrist rest for pro gamers.",
      price: "$37.99",
      rating: "4.4",
      reviewCount: "996",
      image: "https://c.media-amazon.com/images/I/71RyPHQp6ML._AC_SY450_.jpg",
      link: "https://amzn.to/4mhlJ50"
    }
  };

  // Identify product type from filename
  const path = window.location.pathname;
  const key = path.includes("tozo-a1") ? "tozo-a1" :
              path.includes("redthunder-k10") ? "redthunder-k10" : null;

  if (!key || !productData[key]) return;

  const product = productData[key];

  // Inject Structured Data for Google SEO (JSON-LD)
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.image],
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.name.split(" ")[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "USD",
      "price": product.price.replace("$", ""),
      "availability": "https://schema.org/InStock"
    }
  };

  const jsonLdScript = document.createElement("script");
  jsonLdScript.type = "application/ld+json";
  jsonLdScript.innerText = JSON.stringify(schema);
  document.head.appendChild(jsonLdScript);

  // Optional: Track Clicks on "Buy on Amazon" Buttons
  const buyButton = document.querySelector("a.btn-primary");
  if (buyButton) {
    buyButton.addEventListener("click", () => {
      console.log(`Affiliate Click Tracked: ${product.name}`);
    });
  }

  // Lazy-load product image if using large images
  const img = document.querySelector("img.product-image");
  if (img) {
    img.setAttribute("loading", "lazy");
    img.setAttribute("alt", product.name);
  }

  // Enhance page title and meta dynamically (optional)
  document.title = `${product.name} - Belovedbuy`;
  const metaDesc = document.querySelector("meta[name='description']");
  if (metaDesc) metaDesc.setAttribute("content", product.description);
});
<link rel="stylesheet" href="css/style.css">

