import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative min-h-[100svh] flex items-center justify-center bg-background overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 hero-glow" />
      <div className="container-apex relative z-10 text-center">
        <p className="font-display font-bold text-primary text-[140px] md:text-[200px] leading-none">404</p>
        <h1 className="font-display font-bold text-cream text-3xl md:text-5xl">Out of zone.</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist — but the squad is just one click away.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-cream hover:bg-primary-light transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
