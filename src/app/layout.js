import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-gradient-to-tr from-slate-300 to-slate-50"}>
          <div className="h-16">
            <Navbar />
          </div>
          {children}
          <div className="h-fit">

          <Footer />
          </div>
      </body>
    </html>
  );
}
