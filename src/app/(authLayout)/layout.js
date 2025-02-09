import AuthFooter from "@/components/AuthFooter";

export default function AuthLayout({ children }) {
  return (
    <div>
      {children}
      <AuthFooter />
    </div>
  );
}
