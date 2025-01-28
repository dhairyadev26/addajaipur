import p1 from "../assets/K-N-1.webp";
import p2 from "../assets/K-G-1.webp";
import p5 from "../assets/K-F-3.webp";
import p6 from "../assets/K-H-1.webp";
import p7 from "../assets/K-L-1.webp";
import p8 from "../assets/K-J-1.webp";
import p9 from "../assets/K-S-1.webp";
import p10 from "../assets/K-T-1.webp";
import p11 from "../assets/K-U-1.webp";
import p12 from "../assets/K-I-1.webp";
import p13 from "../assets/F-A-1.webp";
import p14 from "../assets/F-B-1.webp";
import p15 from "../assets/F-D-1.webp";
import p16 from "../assets/F-C-1.webp";
import p17 from "../assets/K-K-1.webp";
import p19 from "../assets/S-L-1.webp";
import p20 from "../assets/S-M-1.webp";
import p21 from "../assets/S-N-1.webp";
import p22 from "../assets/S-P-1.webp";
import p23 from "../assets/S-S-1.webp";
import p24 from "../assets/S-K-1.webp";
import p25 from "../assets/S-O-1.webp";
import p26 from "../assets/S-T-1.webp";
import p27 from "../assets/S-R-1.webp";
import p28 from "../assets/L-A-1.webp";
import p29 from "../assets/L-I-1.webp";
import p30 from "../assets/L-F-1.webp";
import p31 from "../assets/L-C-1.webp";
import p32 from "../assets/L-D-1.webp";
import p33 from "../assets/L-G-1.webp";
import p34 from "../assets/L-E-1.webp";
import p35 from "../assets/L-H-1.webp";
import p36 from "../assets/L-B-1.webp";





export const products = [
  {
    id: 1,
    name: "Red Trinkets Tunic Set",
    originalPrice: 330,
    discountPercentage: 30,
    rating: { rate: 4.5, count: 120 },
    category: "kurta",
    image: p1,
    images: [
      require("../assets/K-N-1.webp"),
      require("../assets/K-N-2.webp"),
      require("../assets/K-N-3.webp"),
    ],
    description: "Yoke adorned with gold sequin and dori embroidery.",
    details: [
      "Made from premium quality fabric",
      "Perfect for festive occasions",
      "Available in multiple sizes",
    ],
    colors: [
      { "code": "#cf0b0b", "name": "Red" },
    ],
    sizes: [
      { size: "One Size", stock: 10 },
    ],
  },


  {
    id: 2,
    name: "The Keseri Salwar Set",
    originalPrice: 435,
    discountPercentage: 35,
    rating: { rate: 4.0, count: 95 },
    category: "kurta",
    description: "A floral printed kurta with a modern touch.",
    image: p2,
    images: [
        require("../assets/K-G-1.webp"),
        require("../assets/K-G-2.webp"),
        require("../assets/K-G-3.webp"),
      ],
      details: [
        "Lightweight and breathable fabric",
        "Elegant floral prints",
        "Ideal for casual outings",
      ],
      colors: [{ "code": "#f39c12", "name": "Orange" },
        { "code": "#bb3613", "name": "Red" }, 
      ],
    sizes: [
      { size: "6", stock: 2 },
      { size: "7", stock: 10 },
      { size: "8", stock: 0 },
      { size: "9", stock: 5 },
    ],
  },
  


  {
    id: 5,
    name: "The Kala Khatta Salwar Set",
    originalPrice: 20,
    discountPercentage: 15,
    category: "kurta",
    description: " Stylish pattern with unique golden embroidery designs.",
    rating: { rate: 4.2, count: 110 },
    image: p5,
    colors: [{ "code": "#000", "name": "Black" },
             ],
images: [
               require("../assets/K-F-3.webp"),
               require("../assets/K-F-2.webp"),
               require("../assets/K-F-4.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 1 },
{ size: "M", stock: 3 },
{ size: "L", stock: 2 },
{ size: "XL", stock: 5 },
],
  },



  {
    id: 6,
    name: "The Jamun Cooler Salwar Set",
    originalPrice: 120,
    discountPercentage: 10,
    category: "kurta",
    description: "Antique gold embroidery set on a creamy luxurious fabric. ",
    rating: { rate: 3.9, count: 85 },
    image: p6,
    colors: [{ "code": "#821081", "name": "Purple" },
             ],
images: [
               require("../assets/K-H-1.webp"),
               require("../assets/K-H-2.webp"),
               require("../assets/K-H-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 2 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 1 },
],
  },



  {
    id: 7,
    name: "The Kalakand Salwar Set",
    originalPrice: 2000,
    discountPercentage: 30,
    category: "kurta",
    description: "Cntrast patchwork embroidery in mutiple jewel tones. ",
    rating: { rate: 4.8, count: 210 },
    image: p7,
    colors: [{ "code": "#000", "name": "Black" },
             ],
images: [
               require("../assets/K-L-1.webp"),
               require("../assets/K-L-2.webp"),
               require("../assets/K-L-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 3 },
{ size: "XL", stock: 0 },
],
  },



  {
    id: 8,
    name: "Red Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.5, count: 290 },
    image: p8,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/K-J-1.webp"),
               require("../assets/K-J-2.webp"),
               require("../assets/K-J-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 9,
    name: "The Aam Panna Kurta Set.",
    originalPrice: 1320,
    discountPercentage: 21,
    category: "kurta",
    description: "Inspired embroidery in gold dori, sequins and moti. ",
    rating: { rate: 3.9, count: 100 },
    image: p9,
    colors: [{ "code": "#ffb900", "name": "Yellow" },
             ],
images: [
               require("../assets/K-S-1.webp"),
               require("../assets/K-S-2.webp"),
               require("../assets/K-S-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 1 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 10,
    name: "Ivory Oasis Kurta",
    originalPrice: 1220,
    discountPercentage: 22,
    category: "kurta",
    description: " Adorned with aari embroidery and embellished with embroidered borders.",
    rating: { rate: 3.2, count: 290 },
    image: p10,
    colors: [{ "code": "#fff", "name": "White" },
             ],
images: [
               require("../assets/K-T-1.webp"),
               require("../assets/K-T-2.webp"),
               require("../assets/K-T-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 3 },
{ size: "L", stock: 1 },
{ size: "XL", stock: 3 },
],
  },


  {
    id: 11,
    name: "Mustard Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.6, count: 190 },
    image: p11,
    colors: [{ "code": "#ffb900", "name": "Yellow" },
             ],
images: [
               require("../assets/K-U-1.webp"),
               require("../assets/K-U-2.webp"),
               require("../assets/K-U-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 2 },
{ size: "M", stock: 0 },
{ size: "L", stock: 4 },
{ size: "XL", stock: 1 },
],
  },









  {
    id: 12,
    name: "Ivory Wine Garden Frock Dress",
    originalPrice: 1500,
    discountPercentage: 26,
    category: "frock",
    description: "The kurta dress has a beautiful Wine Garden foil placement print on the hemline. ",
    rating: { rate: 3.6, count: 150 },
    image: p12,
    colors: [{ "code": "#fff", "name": "White" },
             ],
images: [
               require("../assets/K-I-1.webp"),
               require("../assets/K-I-2.webp"),
               require("../assets/K-I-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 4 },
{ size: "M", stock: 2 },
{ size: "L", stock: 1 },
{ size: "XL", stock: 0 },
],
  },

  {
    id: 13,
    name: "Black Fern Tiered Frock Dress",
    originalPrice: 1400,
    discountPercentage: 23,
    category: "frock",
    description: "Gold foil and Embellished sleeve with royal touch. ",
    rating: { rate: 4.1, count: 360 },
    image: p13,
    colors: [{ "code": "#000", "name": "Black" },
             ],
images: [
               require("../assets/F-A-1.webp"),
               require("../assets/F-A-2.webp"),
               require("../assets/F-A-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 4 },
{ size: "M", stock: 0 },
{ size: "L", stock: 2 },
{ size: "XL", stock: 0 },
],
  },

  {
    id: 14,
    name: "Red Rain Lily Furta Dress",
    originalPrice: 2330,
    discountPercentage: 26,
    category: "frock",
    description: "Digital printed kurta dress with Dhagai detailing in accents of red & gold. ",
    rating: { rate: 4.0, count: 230 },
    image: p14,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/F-B-1.webp"),
               require("../assets/F-B-2.webp"),
               require("../assets/F-B-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 15,
    name: "Vanilla Poppy Petal Frock Dress",
    originalPrice: 1110,
    discountPercentage: 20,
    category: "frock",
    description: "Layered hemline and Embellished with border and edged with kinari.  ",
    rating: { rate: 4.6, count: 190 },
    image: p15,
    colors: [{ "code": "#f2d68e", "name": "Skin" },
             ],
images: [
               require("../assets/F-D-1.webp"),
               require("../assets/F-D-2.webp"),
               require("../assets/F-D-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 2 },
{ size: "M", stock: 0 },
{ size: "L", stock: 1 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 16,
    name: "Black Irisbud Frock Dress",
    originalPrice: 1350,
    discountPercentage: 22,
    category: "frock",
    description: " Digital printed kurta dress with Layered hemline and Balloon Sleeves. ",
    rating: { rate: 4.3, count: 330 },
    image: p16,
    colors: [{ "code": "#000", "name": "Black" },
             ],
images: [
               require("../assets/F-C-1.webp"),
               require("../assets/F-C-2.webp"),
               require("../assets/F-C-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 1 },
{ size: "M", stock: 0 },
{ size: "L", stock: 2 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 17,
    name: "Sea Green Grace Frock Dress",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "frock",
    description: "A-line panelled kurta dress - Edged with kinari and Embroidered yoke ",
    rating: { rate: 4.6, count: 190 },
    image: p17,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/K-K-1.webp"),
               require("../assets/K-K-2.webp"),
               require("../assets/K-K-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },










  {
    id: 18,
    name: "Red Son Patti Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "Palla intricately embroidered with signature motifs - Son-Patti. ",
    rating: { rate: 4.6, count: 190 },
    image: p19,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-L-1.webp"),
               require("../assets/S-L-2.webp"),
               require("../assets/S-L-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 19,
    name: "Ivory Coin Work Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "Ivory saree embroidered with coins and gota and Contrast black border. ",
    rating: { rate: 4.6, count: 190 },
    image: p20,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-M-1.webp"),
               require("../assets/S-M-2.webp"),
               require("../assets/S-M-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 20,
    name: "Mysore Pak Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "Designed in silk tissue, for the bride who embraces tradition with a side of her own style. ",
    rating: { rate: 4.6, count: 190 },
    image: p21,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-N-1.webp"),
               require("../assets/S-N-2.webp"),
               require("../assets/S-N-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 21,
    name: "Black Coin Work Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "Black saree embroidered with coins and gota. Contrast red border with gota kaam. ",
    rating: { rate: 4.6, count: 190 },
    image: p22,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-P-1.webp"),
               require("../assets/S-P-2.webp"),
               require("../assets/S-P-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 22,
    name: "Gold Tissue Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: " Saree embellished with contrast dusty pink border. ",
    rating: { rate: 4.6, count: 190 },
    image: p23,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-S-1.webp"),
               require("../assets/S-S-2.webp"),
               require("../assets/S-S-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 23,
    name: "Black Oasis Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "Saree comes with Sheer palla is embellished with embroidered border and tassel detail. ",
    rating: { rate: 4.6, count: 190 },
    image: p24,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-K-1.webp"),
               require("../assets/S-K-2.webp"),
               require("../assets/S-K-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },



  {
    id: 24,
    name: "The Son Barfi Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "A resplendant vision in gold, The Son Barfi saree is designed in gold tissue. ",
    rating: { rate: 4.6, count: 190 },
    image: p25,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-O-1.webp"),
               require("../assets/S-O-2.webp"),
               require("../assets/S-O-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 25,
    name: "Shahi Tukda Tissue Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "Intricately embroidered palla in signature Kalpatru motif in dori, sitara and moti kaam. ",
    rating: { rate: 4.6, count: 190 },
    image: p26,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-T-1.webp"),
               require("../assets/S-T-2.webp"),
               require("../assets/S-T-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 26,
    name: "Black Tassel Gota Saree",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "saree",
    description: "Palla embroidered with accent gota tassels, Edged with kinari Blouse piece ",
    rating: { rate: 4.6, count: 190 },
    image: p27,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/S-R-1.webp"),
               require("../assets/S-R-2.webp"),
               require("../assets/S-R-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },








  {
    id: 27,
    name: "Yellow Nomatic Tribe Lehenga Set",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: "Lehenga comes with beautiful alternate foil and digital printed kalis.",
    rating: { rate: 4.6, count: 190 },
    image: p28,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-A-1.webp"),
               require("../assets/L-A-2.webp"),
               require("../assets/L-A-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 28,
    name: "The Gulab Sherbet Lehenga",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: "The Gulab Sherbet lehenga pays homage to the traditional bride. ",
    rating: { rate: 4.6, count: 190 },
    image: p29,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-I-1.webp"),
               require("../assets/L-I-2.webp"),
               require("../assets/L-I-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 29,
    name: "Ivory Neel-Kamal Lehenga Set",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: "Lehenga adorned with beautiful dori, sitara and dabka kaam. ",
    rating: { rate: 4.6, count: 190 },
    image: p30,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-F-1.webp"),
               require("../assets/L-F-2.webp"),
               require("../assets/L-F-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 30,
    name: "The Neel Bahar Lehenga",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: "A brilliant Azure blue that sparkles at any occasion. ",
    rating: { rate: 4.6, count: 190 },
    image: p31,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-C-1.webp"),
               require("../assets/L-C-2.webp"),
               require("../assets/L-C-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 31,
    name: "The Jaljeera Lehenga",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: ":Drawing inspiration from our house mascots that have been a part of our brand journey ",
    rating: { rate: 4.6, count: 190 },
    image: p32,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-D-1.webp"),
               require("../assets/L-D-2.webp"),
               require("../assets/L-D-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 32,
    name: "Yellow Sorbet Paan-Patti Lehenga",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: "Lehenga embellished with Paan Patti & Son-chidiya motif in gold dori & sitara kaam. ",
    rating: { rate: 4.6, count: 190 },
    image: p33,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-G-1.webp"),
               require("../assets/L-G-2.webp"),
               require("../assets/L-G-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  {
    id: 33,
    name: "Nan Khatai Lehenga",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: " Adorned in the Chand-phool motifs that hugs the bottom of the lehenga, with an ornate fully embroidered blouse. ",
    rating: { rate: 4.6, count: 190 },
    image: p34,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-F-1.webp"),
               require("../assets/L-F-2.webp"),
               require("../assets/L-F-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },


  
  {
    id: 35,
    name: "The Imarti Lehenga",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: "Lehenga adorned with Raj Pankh motif in dori and sitara kaam. Hemline embellished with gota detail ",
    rating: { rate: 4.6, count: 190 },
    image: p35,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-H-1.webp"),
               require("../assets/L-H-2.webp"),
               require("../assets/L-H-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },



  {
    id: 35,
    name: "Rose Thandai Lehenga",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "lehengas",
    description: "Lehenga embellished with motifs inspired by Chand-phool and Sehra in gold dori, sitara and pita kaam. ",
    rating: { rate: 4.6, count: 190 },
    image: p36,
    colors: [{ "code": "#c40404", "name": "Red" },
             ],
images: [
               require("../assets/L-B-1.webp"),
               require("../assets/L-B-2.webp"),
               require("../assets/L-B-3.webp"),
             ],
             details: [
              "Made from premium quality fabric",
              "Perfect for festive occasions",
              "Available in multiple sizes",
            ],
sizes: [
{ size: "S", stock: 0 },
{ size: "M", stock: 0 },
{ size: "L", stock: 0 },
{ size: "XL", stock: 0 },
],
  },



];
