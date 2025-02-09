import Link from "next/link";
import styles from "../register/Register.module.css";

export const metadata = {
  title: "Register Page",
  description: "This is register page",
};

export default function RegisterPage() {
  return (
    <>
      <div className="text-center text-4xl">Register Page</div>
      <Link href="/login" className="flex justify-center mt-4">
        <button className={styles.btn}>Go to login</button>
      </Link>
    </>
  );
}
