import Layout from "@/components/layout";
import "../styles/variables.scss";


import { Noto_Sans } from "@next/font/google";

const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps, children }) {
  return (
    <main className={notosans.className}>
      <Layout probando={Component}>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
