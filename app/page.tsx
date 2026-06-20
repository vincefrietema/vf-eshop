import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Offers />
      <EmailSignup />
      <Footer />
    </main>
  );
}
