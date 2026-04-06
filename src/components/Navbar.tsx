import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center">
        <span 
          className="text-3xl tracking-tight text-foreground" 
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-foreground transition-colors">Home</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reach Us</a>
      </div>

      <div>
        <Button 
          variant="ghost" 
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
        >
          Begin Journey
        </Button>
      </div>
    </nav>
  );
}
