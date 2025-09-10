
import style from '../styles/home.module.scss';
// import SectionTitle from "@/component/SectionTitle";
import Slider from "react-slick";
import FeaturedAds from "@/component/FeaturedAds/index";
import ProductCarousel from '@/component/ProductCarousel/index';
import Category from '@/component/Category/index';
import Banner from '@/component/banner/index';
import ProductCard from '@/component/ProductCard/index';



const products = [
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

export default function Home() {
  const productSlide = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '0',
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 2000, // Time in milliseconds (2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main">
      <ProductCarousel />
      <Category />
      <Banner />
      <div className={`grayBg`}>
        <section className="section">
          {/* <SectionTitle
            title="Trending Adds"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magnam."
          /> */}
          {/* <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}> */}
           <div className="container">
             <div className={style.featuredAdd}>
              <div className={style.addName}>
                <FeaturedAds 
                  title={"Featured Ads"}
                  description={"Millions of people use ClassiAds to turn their ideas into reality."}
                  buttonText={"View All Listings"}/>
              </div>
               <div className={style.productSlide}>
               <Slider {...productSlide}>
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    location={product.location}
                    time={product.time}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    Negotiable={product.Negotiable} 
                    id={product.linkID}                  />
                ))}
              </Slider>
               </div>
             </div>
           </div>
          {/* </div> */}
        </section>
      </div>
    </div>
  );
}
