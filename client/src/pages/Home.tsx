import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">
                {/* Edit your title here */}
                Your Title Here
                <br />
                <span className="text-primary">Your Specialty</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                {/* Edit your tagline here */}
                Your professional tagline or brief description here.
              </p>
            </motion.div>
          </div>
        </section>

        <AboutSection />
        <CaseStudies />
        <ContactSection />
      </main>
    </div>
  );
}