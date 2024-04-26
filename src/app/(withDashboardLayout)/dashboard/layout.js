import Footer from "@/components/Shared/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
