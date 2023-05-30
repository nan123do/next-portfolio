import styles from '../public/assets/css/style.module.css'
import Image from 'next/image'
import { faLaravel, faHtml5, faCss3, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Image
          src="/assets/img/ititle.svg"
          alt="Box Top"
          width={16}
          height={314}
          priority
          data-aos="fade-down"
          data-aos-duration="2000"
        />
        <div className={styles["header-title"]} data-aos="fade-right" data-aos-duration="2000">
          <div className={styles["header-title-top"]}>
            <h1>
              <span className={styles["primary-color"]}>Web</span>
              Developer
            </h1>
          </div>
          <div className={styles["header-title-bottom"]}>
            <h1>Portfolio</h1>
          </div>
        </div>
      </div>
      <div className={styles["divider"]}>
        <Image
          src="/assets/img/dividertop.svg"
          alt="Divider"
          width={200}
          height={200}
          priority
        />
      </div>
      <section className={styles["person"]}>
        <div className={styles["person-foto"]} data-aos="fade-down-right">
          <Image
            src="/assets/img/profil.png"
            alt="Person Photo"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className={styles["person-detail"]} data-aos="fade-down-left">
          <h1>NANDO CARERA</h1>
          <p className={styles["text-indent"]}>
            I am a web developer with over one years of experience in front-end
            and back-end development. I enjoy researching and keeping myself
            updated with the latest web design and development technology trends
            to ensure that the websites I develop are relevant and use best
            practices.
          </p>
          <p className={styles["text-indent"]}>
            I have a diverse portfolio. Please explore examples of my work to see
            my quality and expertise in developing websites.
          </p>
          <div className={styles["contact"]}>
            <Image
              src="/assets/img/mail.svg"
              alt="Email Logo"
              width={30}
              height={30}
              className={styles["contact-logo"]}
              priority
            />
            <p>careracarera1@gmail.com</p>
          </div>
        </div>
      </section>
      <div className={`${styles["divider"]} ${styles["bg-third"]}`}>
        <Image
          src="/assets/img/dividerbottom.svg"
          alt="Divider"
          width={200}
          height={200}
          priority
        />
      </div>
      <section className={`${styles["person-desc"]} ${styles["bg-third"]}`}>
        <div className={styles["person-detail"]}>
          <h1>Education</h1>
          <div className={styles["person-education"]}>
            <h2>Universitas Brawijaya</h2>
            <p>S1 Pendidikan Teknologi Informasi</p>
            <h3 className={styles["primary-color"]}>2017 - 2021</h3>
          </div>
          <div className={styles["person-education"]}></div>
        </div>
        <div className={styles["person-detail"]}>
          <h1>Skill</h1>
          <div className={styles["person-skill"]}>
            <div className={styles["skill-col"]}>
              <FontAwesomeIcon icon={faLaravel} size='2x' />
              <p>Laravel</p>
            </div>
            <div className={styles["skill-col"]}>
              <FontAwesomeIcon icon={faHtml5} size='2x' />
              <p>HTML 5</p>
            </div>
            <div className={styles["skill-col"]}>
              <FontAwesomeIcon icon={faCss3} size='2x' />
              <p>CSS 3</p>
            </div>
            <div className={styles["skill-col"]}>
              <FontAwesomeIcon icon={faWordpress} size='2x' />
              <p>Wordpress</p>
            </div>
            <div className={styles["skill-col"]}>
              <FontAwesomeIcon icon={faPhp} size='2x' />
              <p>PHP</p>
            </div>
          </div>
        </div>
        <div className={styles["person-detail"]}>
          <h1>Experience</h1>
          <div className={styles["person-education"]}>
            <h2>Axata Technology</h2>
            <p>Full Stack Developer</p>
            <h3 className={styles["primary-color"]}>2021 - Now</h3>
          </div >
        </div >
      </section >
      <div className={styles["divider"]}>
        <Image
          src="/assets/img/dividertop.svg"
          alt="Divider"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className={styles["product-title"]}>
        <Image
          src="/assets/img/producttitle.svg"
          alt="Product Title"
          width={200}
          height={200}
        />
      </div>
      <div className={`${styles["divider"]} ${styles["bg-third"]}`}>
        <Image
          src="/assets/img/dividerbottom.svg"
          alt="Divider"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className={styles["section-product"]}>
        <div
          className={styles["product-content"]}
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        >
          <div className={styles["product-name"]}>
            <h1>Product Title</h1>
            <p>Coming Soon</p>
          </div>
          <div className={styles["product-image"]}></div>
          <div className={styles["product-name"]}>
            <h1>Product Title</h1>
            <p>Coming Soon</p>
          </div>
          <div className={styles["product-image"]}></div>
          <div className={styles["product-image"]}></div>
          <div className={styles["product-name"]}>
            <h1>Product Title</h1>
            <p>Coming Soon</p>
          </div>
          <div className={styles["product-image"]}></div>
          <div className={styles["product-name"]}>
            <h1>Product Title</h1>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
      <div className={`${styles["divider"]} ${styles["bg-third"]}`}>
        <Image
          src="/assets/img/dividerfooter.svg"
          alt="Divider"
          width={200}
          height={200}
          priority
        />
      </div>
      <footer>
        <div className={styles["footer-message"]} data-aos="fade-left">
          <h1>thank you</h1>
        </div>
        <div className={styles["social"]} data-aos="fade-left">
          <div className={styles["social-detail"]}>
            <Image
              src="/assets/img/instagram.svg"
              alt="Instagram Logo"
              className={styles["contact-logo"]}
              width={40}
              height={30}
            />
            <p>@nandocarera_</p>
            <h1>|</h1>
          </div>
          <div className={styles["social-detail"]}>
            <Image
              src="/assets/img/mail.svg"
              alt="Mail Logo"
              className={styles["contact-logo"]}
              width={40}
              height={30}
            />
            <p>careracarera1@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}
