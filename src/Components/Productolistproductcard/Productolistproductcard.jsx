import Slider from "react-slick";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Productolistproductcard.css";
// import product1 from "../../assets/images/perfume.png";
// import product2 from "../../assets/images/perfume-hover.png";
import { Link, useNavigate } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistApiServices";
import { useDispatch, useSelector } from "react-redux";
import { updateUserWishList } from "../../redux/slices/userSlice";

export default function Productolistproductcard(Props) {
  const { product } = Props;
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [wishlisted, setWishlisted] = useState(false);

  // const images = [product1, product2, product1, product2]; // Add more images as needed

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // function to add item in wishlist
  async function addPRoductToWishlist() {
    if (product._id && user.id) {
      const response = await addToWishlist(product?._id, user.id);
      if (response) {
        dispatch(updateUserWishList({ user: response?.wishlist?.products }));
      }
    } else {
      navigate("/about");
    }
  }

  // function to remove item from wishlist
  async function removeProductFromWishlist() {
    if (product._id && user.id) {
      const response = await removeFromWishlist(product._id, user.id);
      if (response) {
        dispatch(updateUserWishList({ user: response?.wishlist?.products }));
      }
    } else {
      navigate("/about");
    }
  }

  // function to decide the products are in wishlist or not
  function isWishListed() {
    return user?.wishlist?.some((item) => {
      return item.product === product._id;
    });
  }

  return (
    <div className="product-list-card">
      <div className="image-wrapper">
        <Link to={`/product-inner/${product._id}`}>
          <Slider {...settings}>
            {product &&
              Object.keys(product).length > 0 &&
              product?.productImages.map((img, i) => (
                <img
                  key={i}
                  src={`${import.meta.env.VITE_BASE_URL}/${img}`}
                  alt={`product-${i}`}
                  className="product-image"
                />
              ))}
          </Slider>
        </Link>
        <button
          className="wishlist-btn"
          // onClick={() => setWishlisted(!wishlisted)}
        >
          {isWishListed() ? (
            <FaHeart
              color="red"
              onClick={(e) => {
                e.stopPropagation();
                removeProductFromWishlist();
              }}
            />
          ) : (
            <FaRegHeart
              onClick={(e) => {
                e.stopPropagation();
                addPRoductToWishlist();
              }}
            />
          )}
        </button>
      </div>

      <div className="product-details">
        <p className="product-name">{product?.productName || ""}</p>
        <div className="product-price">
          <span className="price">
            Rs. {(product?.productDiscount / 100) * product?.productPrice}
          </span>
          <span className="original-price">
            Rs. {product?.productPrice || 0}
          </span>
          <span className="discount">({product?.productDiscount}% OFF)</span>
        </div>
        <div>
          <button className="secondry-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
