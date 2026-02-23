import Image from "next/image";
import { Star, Leaf, Heart, MapPin, CheckCircle, ShieldCheck, Mail, Facebook, Instagram } from "lucide-react";
import styles from "./page.module.css";
import OrderForm from "./OrderForm";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navbar Minimal */}
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <Image src="/logo.jpg" alt="Nutrimize Logo" width={50} height={50} className={styles.logoImage} />
              <h1 className="font-serif">Nutrimize</h1>
            </div>
            <div className={styles.navLinks}>
              <a href="#products">Products</a>
              <a href="#certifications">Quality</a>
              <a href="#reviews">Reviews</a>
              <a href="#order">Order Form</a>
              <a href="#where-to-find">Find Us</a>
            </div>
            <a href="#order" className="btn btn-secondary">Order Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <Image src="/hero.jpg" alt="Home made baby food" fill priority style={{ objectFit: "cover" }} />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={`glass-card animate-fade-in ${styles.heroCard}`}>
            <span className={styles.tag}>Purity in Every Bite</span>
            <h1 className={styles.heroTitle}>Home made baby food products with love!</h1>
            <p className={styles.heroSubtitle}>
              Give your child the best start in life with our wholesome, natural ingredients. Let's make our children healthy today.
            </p>
            <div className={styles.heroButtons}>
              <a href="https://www.facebook.com/nutrimize" className="btn">Place Your Order</a>
              <a href="#products" className="btn btn-secondary">Explore Products</a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`section bg-white ${styles.certSection}`}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.sectionTitle}>The Nutrimize Promise</h2>
            <p className={styles.sectionDesc}>Certified quality and nutrition you can always trust.</p>
          </div>
          <div className={styles.certGrid}>
            <div className={styles.certCard}>
              <div className={styles.iconWrapper}><Leaf size={32} /></div>
              <h3>100% Natural</h3>
              <p>No artificial colors, flavors, or preservatives. Just real food.</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.iconWrapper}><ShieldCheck size={32} /></div>
              <h3>Safety First</h3>
              <p>Prepared in a certified hygienic facility with strict quality controls.</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.iconWrapper}><Heart size={32} /></div>
              <h3>Made With Love</h3>
              <p>Home-cooked recipes tailored for growing babies' nutritional needs.</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.iconWrapper}><CheckCircle size={32} /></div>
              <h3>Pediatrician Approved</h3>
              <p>Recipes crafted in consultation with child nutrition experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className={`section bg-light ${styles.productsSection}`}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Nourishing Products for Every Stage</h2>
            <p className={styles.sectionDesc}>Carefully blended textures and flavors to delight your little one.</p>
          </div>
          <div className={styles.productGrid}>
            {[
              { name: "Organic Apple & Oats Mash", stage: "Stage 1 (6+ months)", desc: "Smooth and easily digestible.", image: "/product1.jpg" },
              { name: "Carrot & Sweet Potato Puree", stage: "Stage 1 (6+ months)", desc: "Rich in vitamin A for eye health.", image: "/product2.jpg" },
              { name: "Spinach, Pea & Pear Blend", stage: "Stage 2 (8+ months)", desc: "A tasty way to introduce greens.", image: "/product3.jpg" },
              { name: "Multigrain Berry Porridge", stage: "Stage 3 (10+ months)", desc: "Hearty and fulfilling energy booster.", image: "/product4.jpg" }
            ].map((prod, i) => (
              <div key={i} className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  <Image src={prod.image} alt={prod.name} width={400} height={300} className={styles.productImage} />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productStage}>{prod.stage}</span>
                  <h3>{prod.name}</h3>
                  <p>{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="https://www.facebook.com/nutrimize" className="btn">View Full Menu & Order</a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className={`section bg-white ${styles.reviewsSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>Loved by Parents. Approved by Babies.</h2>
          <div className={styles.reviewGrid}>
            {[
              { name: "Sarah M.", review: "My 8-month-old absolutely loves the sweet potato puree! It gives me peace of mind knowing exactly what goes into his tummy.", rating: 5 },
              { name: "Ahmed K.", review: "Finally, a homemade baby food option that I can trust. The textures are perfect and the delivery is always reliable.", rating: 5 },
              { name: "Leila D.", review: "Nutrimize has been a lifesaver for this busy mom. Pure, natural ingredients and my daughter finishes every bowl.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.stars}>
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={20} fill="var(--accent-orange)" color="var(--accent-orange)" />)}
                </div>
                <p className={styles.reviewText}>"{review.review}"</p>
                <div className={styles.reviewer}>- {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Find Us */}
      <section id="where-to-find" className={`section bg-light ${styles.locationSection}`}>
        <div className="container">
          <div className={styles.locationContainer}>
            <div className={styles.locationText}>
              <h2 className={styles.sectionTitle}>Where to find our products</h2>
              <p>We deliver fresh, homemade baby food right to your doorstep. You can also find our products at select partner stores and organic markets.</p>

              <ul className={styles.locationList}>
                <li>
                  <MapPin className={styles.locationIcon} />
                  <div>
                    <strong>Direct Delivery</strong>
                    <p>Order via Facebook for home delivery across the city.</p>
                  </div>
                </li>
                <li>
                  <MapPin className={styles.locationIcon} />
                  <div>
                    <strong>Local Organic Markets</strong>
                    <p>Find us every weekend at the City Central Organic Farmer's Market.</p>
                  </div>
                </li>
              </ul>
              <a href="https://www.facebook.com/nutrimize" className="btn" style={{ marginTop: '1.5rem' }}>Message Us to Order</a>
            </div>
            <div className={styles.locationImage}>
              {/* Map graphic or delivery van illustration placeholder */}
              <div className={styles.mapPlaceholder}>
                <MapPin size={64} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                <p>Fresh Delivery Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <OrderForm />

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div>
            <div className={styles.footerLogo}>
              <Image src="/logo.jpg" alt="Nutrimize Logo" width={60} height={60} className={styles.logoImage} />
              <h2 className="font-serif">Nutrimize</h2>
            </div>
            <p>Home made baby food products with love! Let's make our children healthy.</p>
          </div>
          <div>
            <h3 className="font-serif">Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#certifications">Why Trust Us</a></li>
              <li><a href="#where-to-find">Where to Find Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif">Connect With Us</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/nutrimize" target="_blank" rel="noreferrer"><Facebook /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Mail /></a>
            </div>
            <p style={{ marginTop: '1rem' }}>We'd love to hear from you!</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Nutrimize. All rights reserved.</p>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className={styles.whatsappButton}
        aria-label="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0c-6.566 0-11.904 5.341-11.907 11.91 0 2.099.549 4.148 1.595 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.564 0 11.898-5.341 11.902-11.912 0-3.186-1.231-6.18-3.469-8.418z" />
        </svg>
      </a>
    </main>
  );
}
