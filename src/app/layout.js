import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AppWrapper from "../../lib/redux/provider";

export const metadata = {
  title: "CODACITY - Learn to Code Online",
  description:
    "Codacity is your one-stop platform for learning to code. Master programming with our comprehensive courses and expert guidance.",
  keywords:
    "learn to code, coding courses, online coding, programming tutorials, web development",
  author: "Codacity",
  ogTitle: "CODACITY - Learn to Code Online",
  ogDescription:
    "Codacity is your one-stop platform for learning to code. Master programming with our comprehensive courses and expert guidance.",
  ogImage: "/c-logo.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-gradient-to-r from-gray-200 to-white"}>
        <AppWrapper>
          <div className="h-16">
            <Navbar />
          </div>
          <div className="">{children}</div>

          <div className="">
            <Footer />
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
