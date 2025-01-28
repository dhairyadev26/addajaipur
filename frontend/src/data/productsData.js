import p1 from "../assets/K-N-1.webp";
import p2 from "../assets/K-G-1.webp";
import p3 from "../assets/K-A-2.avif";
import p4 from "../assets/F-O-1.avif";
import p5 from "../assets/K-F-3.webp";
import p6 from "../assets/K-N-1.webp";
import p7 from "../assets/K-N-1.webp";
import p8 from "../assets/K-N-1.webp";
import p9 from "../assets/K-N-1.webp";
import p10 from "../assets/K-N-1.webp";
import p11 from "../assets/K-N-1.webp";
import p12 from "../assets/K-N-1.webp";
import p13 from "../assets/K-N-1.webp";
import p14 from "../assets/K-N-1.webp";


export const products = [
  {
    id: 1,
    name: "Red Trinkets Tunic Set",
    originalPrice: 30,
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
    originalPrice: 35,
    discountPercentage: 20,
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
    id: 3,
    name: "Casual Cotton Kurta",
    originalPrice: 25,
    discountPercentage: 10,
    rating: { rate: 3.8, count: 70 },
    category: "kurta",
    description: "A floral printed kurta with light designs.",
    image: p3,
    colors: [{ "code": "#e23904", "name": "Orange" },
             { "code": "#fd97bf", "name": "Pink" }, 
                    ],
    images: [
                      require("../assets/F-O-1.avif"),
                      require("../assets/F-O-3.avif"),
                      require("../assets/F-O-2.jpg"),
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
    id: 4,
    name: "Summer Comfort Kurta",
    originalPrice: 40,
    category: "kurta",
    description: " Simple pattern with unique embroidery designs.",
    discountPercentage: 25,
    rating: { rate: 4.9, count: 150 },
    image: p4,
    colors: [{ "code": "#430350", "name": "Purple" }, 
             ],
images: [
               require("../assets/K-A-2.avif"),
               require("../assets/K-A-3.avif"),
               require("../assets/K-A-4.avif"),
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
    colors: [{ "code": "#e23904", "name": "Orange" },
      { "code": "#fd97bf", "name": "Pink" }, 
             ],
images: [
               require("../assets/F-O-1.avif"),
               require("../assets/F-O-3.avif"),
               require("../assets/F-O-2.jpg"),
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
    id: 8,
    name: "Red Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.6, count: 190 },
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
    name: "Beautiful Jaipuri cotton frock.",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Light designs perfect for summer wear. ",
    rating: { rate: 4.6, count: 190 },
    image: p9,
    colors: [{ "code": "#f4db03", "name": "Yellow" },
             ],
images: [
               require("../assets/F-L-1.avif"),
               require("../assets/F-L-2.jpg"),
               require("../assets/F-L-3.avif"),
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
    id: 10,
    name: "Red Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.6, count: 190 },
    image: p10,
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
    id: 11,
    name: "Red Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.6, count: 190 },
    image: p11,
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
    id: 12,
    name: "Red Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.6, count: 190 },
    image: p3,
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
    id: 13,
    name: "Red Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.6, count: 190 },
    image: p3,
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
    id: 14,
    name: "Red Spring Blossom Kurta",
    originalPrice: 1200,
    discountPercentage: 25,
    category: "kurta",
    description: "Adorned with aari embroidery and embellished with embroidered borders. ",
    rating: { rate: 4.6, count: 190 },
    image: p3,
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
];
