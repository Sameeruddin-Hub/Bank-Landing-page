import {card} from "../assets"
import styles,{layout} from "../style"
import Button from "./Button";

const CardDeal = () => (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" />in few easy steps. </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Look for cards with rewards programs that align with your lifestyle. Whether it's travel miles, cash back, or points, choose a program that provides tangible benefits based on your preferences</p>
  <Button styles="mt-10"/>
    
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
   </section>
)

export default CardDeal;
