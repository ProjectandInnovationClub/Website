import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Home, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-background via-muted to-background">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-primary/20 transition"
      >

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="p-6 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <AlertTriangle size={50} className="text-primary" />
          </div>

          <h1 className="text-6xl font-bold gradient-text">404</h1>

          <p className="text-muted-foreground mt-3 text-lg">
            This page doesn’t exist
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Looks like you took a wrong turn
          </h2>

          <p className="text-muted-foreground mb-6">
            The page <span className="text-primary">{location.pathname}</span> could not be found.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              <Home size={18} />
              Back Home
            </Link>

            <a
              href="tel:+919373617934"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition"
            >
              <Phone size={18} />
              Contact
            </a>
          </div>

          {/* Email */}
          <div className="text-sm text-muted-foreground border-t border-white/10 pt-4">
            Need help?{" "}
            <a
              href="mailto:piccomp@pccoer.in"
              className="text-primary underline"
            >
              piccomp@pccoer.in
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default NotFound;