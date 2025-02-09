import Link from "next/link";
import styles from "../login/Login.module.css";

export const metadata = {
  title: "Login Page",
  description: "This is login page",
};

export default function LoginPage() {
  return (
    <>
      <div className="text-center text-4xl">LoginPage</div>
      <Link href="/register" className="flex justify-center mt-4">
        <button className={styles.btn}>Go to register</button>
      </Link>
    </>
  );
}
