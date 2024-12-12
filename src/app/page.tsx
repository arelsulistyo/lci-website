import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Main } from "@/components/main/main";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
