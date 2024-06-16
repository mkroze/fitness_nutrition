import Footer from "./Footer";
import NavBar from "./Navbar";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title ? title + " - Nutrifit" : "Nutrifit"}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nova+Round&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <main className="flex-grow p-4">{children}</main>
      <Footer className="relative bottom-0 w-full p-4 bg-gray-200 text-center" />
    </div>
  );
};

export default Layout;
