import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function CommonLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="h-screen py-10">{children}</div>
      <Footer />
    </div>
  );
}
