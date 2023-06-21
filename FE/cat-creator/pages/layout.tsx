import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={styles.Navbar}>
        <Navbar />
      </div>
      {children} 
    </>
  )
}