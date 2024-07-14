import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container1}>
        <div className={styles.item1}>
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Kids</a>
            </li>
            <li>
              <a href="">Home & Living</a>
            </li>
            <li>
              <a href="">Beauty</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Myntra Insider</a>
            </li>
          </ul>
        </div>
        <div className={styles.item2}>
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">T&C</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Track Orders</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Cancellation </a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Whitehat</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Privacy Policy </a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
          </ul>
        </div>
        <div className={styles.item3}>
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className={styles.footerImage1}>
            <img
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt="Google Play"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt="App Store"
            />
          </div>
          <h3 className={styles.item3Title}>KEEP IN TOUCH</h3>
          <div className={styles.footerIcons}>
            <img
              src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
              alt="Facebook"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
              alt="Twitter"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
              alt="YouTube"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
              alt="Instagram"
            />
          </div>
        </div>
        <div className={styles.item4}>
          <div className={styles.item4Title1}>
            <img
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              alt="100% Original"
            />
            <h3>100% ORIGINAL</h3>
            <p>guarantee</p>
            <p className={styles.spanTitle}>for all products at myntra.com</p>
          </div>
          <div className={styles.item4Title2}>
            <img
              loading="lazy"
              src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
              alt="30 Days Return"
            />
            <h3>Return within 30 days</h3>
            <p>of</p>
            <p className={styles.spanTitle}>receiving your order</p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.item1}>
          <h3>POPULAR SEARCHES</h3>
          <span className={styles.item1Hr}></span>
        </div>
        <div className={styles.item2}>
          <span className={styles.item2Link}>Makeup</span>
          <span className={styles.item2Link}>Dresses For Girls</span>
          <span className={styles.item2Link}>T-Shirts</span>
          <span className={styles.item2Link}>Sandals</span>
          <span className={styles.item2Link}>Headphones</span>
          <span className={styles.item2Link}>Babydolls</span>
          <span className={styles.item2Link}>Blazers for Men</span>
          <span className={styles.item2Link}>Ladies Watches</span>
          <span className={styles.item2Link}>Bags</span>
          <span className={styles.item2Link}>Sport Shoes</span>
          <span className={styles.item2Link}>Reebok Shoes</span>
          <span className={styles.item2Link}>Puma Shoes</span>
          <span className={styles.item2Link}>Boxers</span>
          <span className={styles.item2Link}>Wallets</span>
          <span className={styles.item2Link}>Tops</span>
          <span className={styles.item2Link}>Earrings</span>
          <span className={styles.item2Link}>Fastrack Watches</span>
          <span className={styles.item2Link}>Kurtis</span>
          <span className={styles.item2Link}>Nike</span>
          <span className={styles.item2Link}>Smart Watches</span>
          <span className={styles.item2Link}>Titan Watches</span>
          <span className={styles.item2Link}>Designer Blouse</span>
          <span className={styles.item2Link}>Gowns</span>
          <span className={styles.item2Link}>Rings</span>
          <span className={styles.item2Link}>Cricket</span>
          <span className={styles.item2Link}>Shoes</span>
          <span className={styles.item2Link}>Forever 21</span>
          <span className={styles.item2Link}>Eye makeup</span>
          <span className={styles.item2Link}>Photo Frames</span>
          <span className={styles.item2Link}>Punjabi Suits</span>
          <span className={styles.item2Link}>Bikini</span>
          <span className={styles.item2Link}>Myntra Fashion Show</span>
          <span className={styles.item2Link}>Lipstick</span>
          <span className={styles.item2Link}>Saree</span>
          <span className={styles.item2Link}>Watches</span>
          <span className={styles.item2Link}>Lehenga</span>
          <span className={styles.item2Link}>Goggles</span>
          <span className={styles.item2Link}>Bras</span>
          <span className={styles.item2Link}>Suit</span>
          <span className={styles.item2Link}>Chinos</span>
          <span className={styles.item2Link}>Shoes</span>
          <span className={styles.item2Link}>Adidas Shoes</span>
          <span className={styles.item2Link}>Woodland Shoes</span>
          <span className={styles.item2Link}>Jewellery</span>
          <span className={styles.item2Link}>Designer Sarees</span>
        </div>
        <div className={styles.item3}>
          <div className={styles.item3Title1}>
            <p>In case of any concern,</p>
            <span className={styles.contact}>Contact us</span>
          </div>
          <div className={styles.item3Title2}>
            <p>© 2024 www.myntra.com. All rights reserved.</p>
          </div>
        </div>
        <span className={styles.item4Hr}></span>
      </div>
      <div className={styles.container3}>
        <div className={styles.item1}>
          <h3>Registered Office Address</h3>
          <ul>
            <li>Buildings Alyssa,</li>
            <li>Begonia and Clover situated in Embassy Tech Village,</li>
            <li>Outer Ring Road,</li>
            <li>Devarabeesanahalli Village,</li>
            <li>Varthur Hobli,</li>
            <li>Bengaluru - 560103, India</li>
          </ul>
        </div>
        <div className={styles.item2}>
          <p>CIN: U72300KA2007PTC041799</p>
          <span>Telephone:</span>
          <span className={styles.contactNo}>+91-80-61561999</span>
        </div>
      </div>
      <hr className={styles.item4Hr} />
    </footer>
  );
};

export default Footer;
