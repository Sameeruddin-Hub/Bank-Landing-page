import React from "react";
import {Navbar,
  Billing,
  Business,
  CardDeal,
  CTA,
  Feedback,
  Footer,
  Clients,
  GetStarted,
  Hero,
  Button,
  Stats,
  Testimonials,
} from "./components";
import styles from "./style";




const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
          </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}` }>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        
        </div>
      </div>
  </div>
);

export default App;
