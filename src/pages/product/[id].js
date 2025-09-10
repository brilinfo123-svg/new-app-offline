// pages/products/[id].js

import { useRouter } from 'next/router';

const products2 = [
    {
      title: "11inch Macbook Air",
      location: "Mohali",
      time: "5:24PM",
      description:"Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
      imageUrl: "/images/products/product4.jpeg",
      price: "340",
      Negotiable: "Fixed",
      linkID: "",
    },
    {
      title: "Full Study Table Combo",
      location: "Chandigarh",
      time: "3:24PM",
      description: "Lorem ipsum dolor sit amet, consectetur dolor sit amet",
      imageUrl: "/images/products/product1.jpeg", // Replace with your image path
      price: "2240",
      Negotiable: "Fixed",
      linkID: "2",
    },
    {
      title: "Full Study Table Combo",
      location: "Rajasthan",
      time: "5:24PM",
      description: "Lorem ipsum dolor dolor sit amet, consect consectetur",
      imageUrl: "/images/products/product2.jpeg", // Replace with your image path
      price: "3500",
      Negotiable: "Negotiable",
      linkID: "3",
    },
    {
      title: "Full Study Table Combo",
      location: "noida",
      time: "8:24PM",
      description:"Lorem ipsum dolor sit dolor amet, consectetur",
      imageUrl: "/images/products/product3.jpeg", // Replace with your image path
      price: "3600",
      Negotiable: "Fixed",
      linkID: "4",
    },
    // Add more products as needed
  ];

const ProductPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const products1 = products2.find((prod) => prod.linkID === id);
    if (!products1) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            {products1.title && <h1>Title: {products1.title}</h1>}
            <p>description: {products1.description}</p>
            <p>Price: {products1.price}</p>
            <p>location: {products1.location}</p>
            <p>time: {products1.time}</p>
            <p>imageUrl: {products1.imageUrl}</p>
            <p>Negotiable: {products1.Negotiable}</p>
        </div>
    );
};

export default ProductPage;
