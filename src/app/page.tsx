import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Materials } from "@/components/sections/Materials";
import { Coverage } from "@/components/sections/Coverage";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";
import { MessageSquare, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      <Hero />
      <About />
      <Services />
      <Materials />
      <Coverage />
      <WhyChooseUs />
      <Contact />
      
      <Footer />

      {/* Sticky Mobile CTAs */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 lg:hidden">
        <a
          href="https://wa.me/919937045899"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl animate-bounce"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href="tel:+919937045899"
          className="bg-brand-red text-white p-4 rounded-full shadow-2xl"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </main>
  );
}
