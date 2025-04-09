import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const galleryImages = [
    {
      src: "https://i.pinimg.com/736x/a2/77/9a/a2779a3ff286aac8595fc5226e351b27.jpg",
      category: "fruits",
    },
    {
      src: "https://i.pinimg.com/736x/eb/d4/6d/ebd46dc5296e8f8b160e73c549f0c9dc.jpg",
      category: "fruits",
    },
    {
      src: "https://i.pinimg.com/736x/45/ba/2f/45ba2f57c50e8969790c3aef303e9141.jpg",
      category: "fruits",
    },
    {
      src: "https://i.pinimg.com/736x/6a/6b/57/6a6b5737322276a02c7c555174774c65.jpg",
      category: "fruits",
    },
    {
      src: "https://i.pinimg.com/736x/96/ab/87/96ab879a8dd3c238ca9e75067437ad7a.jpg",
      category: "fruits",
    },
    {
      src: "https://i.pinimg.com/736x/db/5f/83/db5f832bc443471925774800d905c6d3.jpg",
      category: "smoothies",
    },
    {
      src: "https://i.pinimg.com/736x/d4/5a/08/d45a0840d00e9dec6e273ed9066e0d38.jpg",
      category: "smoothies",
    },
    {
      src: "https://i.pinimg.com/736x/bd/7f/9f/bd7f9fd43640d83e4b8b37649013919e.jpg",
      category: "smoothies",
    },
    {
      src: "https://i.pinimg.com/736x/b6/23/70/b62370177a49240b0aaad39d308e5542.jpg",
      category: "smoothies",
    },
    {
      src: "https://i.pinimg.com/736x/15/f8/ba/15f8baa2f339dbfb85c9958ade3cb2b6.jpg",
      category: "smoothies",
    },
    {
      src: "https://i.pinimg.com/736x/02/e6/e3/02e6e3b9fdf6650a2322d53113b4b181.jpg",
      category: "vegetables",
    },
    {
      src: "https://i.pinimg.com/736x/3a/04/44/3a0444680d3b359aaf7f5fe867551362.jpg",
      category: "vegetables",
    },
    {
      src: "https://i.pinimg.com/736x/08/52/64/08526456aa57e4efdf7619bdc577bb13.jpg",
      category: "vegetables",
    },
    {
      src: "https://i.pinimg.com/736x/23/e9/4d/23e94d977907448e1e9dac151e3f5bcf.jpg",
      category: "vegetables",
    },
    {
      src: "https://i.pinimg.com/736x/af/83/98/af8398596b49ffa5099fec2d06584710.jpg",
      category: "vegetables",
    },
  ];

  const filteredImages = galleryImages.filter((image) =>
    filter === "all" ? true : image.category === filter
  );

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>Our Gallery</h1>
      <p className={styles.gallerySubtitle}>
        Explore the beauty of our natural drinks and ingredients.
      </p>

      <div className={styles.filterContainer}>
        <button
          onClick={() => setFilter("all")}
          className={styles.filterButton}
        >
          All
        </button>
        <button
          onClick={() => setFilter("fruits")}
          className={styles.filterButton}
        >
          Fruits
        </button>
        <button
          onClick={() => setFilter("smoothies")}
          className={styles.filterButton}
        >
          Smoothies
        </button>
        <button
          onClick={() => setFilter("vegetables")}
          className={styles.filterButton}
        >
          Vegetables
        </button>
      </div>

      <div className={styles.gridContainer}>
        {filteredImages.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
