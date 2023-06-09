import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "styles/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
