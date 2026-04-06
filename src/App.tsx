import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <Hero />
    </main>
  );
}
