import CTA from "./cta";
import FAQ from "./faq";
import Features from "./features";
import Footer from "./footer";
import Hero from "./hero";
import HowItWorks from "./howitworks";
import Navbar from "./navbar";
import Statistics from "./statistics";
import Testimonials from "./testimonials";


export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA/>
      <Footer />
    </>
  );
}