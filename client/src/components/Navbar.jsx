import { useTheme } from "../utils/ThemeContext";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "lucide-react"; // You can install `lucide-react` or use any icon set
import { X } from "lucide-react";
import SOSButton from "../utils/SOSButton";


const Navbar = () => {
  const { toggleTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed w-full z-30 flex justify-between items-center px-4 py-3 shadow-md backdrop-blur-lg bg-black/40"
        >
          {/* Logo */}
          <ScrollLink
            to="heroSection"
            smooth={true}
            duration={800}
            className="text-white font-[Savate] font-extrabold text-3xl md:text-4xl cursor-pointer"
          >
            Mind
            <span className="bg-indigo-700 text-transparent bg-clip-text">
              Mate
            </span>
          </ScrollLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavItem label="Home" scrollTo="heroSection" route="/" />
            <NavItem
              label="Our Chatbot"
              scrollTo="chatbotSection"
              route="/chatbot"
            />
            <NavItem
              label="Journal"
              scrollTo="journalSection"
              route="/journal"
            />
            <NavItem
              label="Resources"
              scrollTo="resourcesSection"
              route="/resources"
            />
            <NavItem
              label="Emergency Help"
              scrollTo="emergencySection"
              route="/helplines"
            />
            <NavItem
              label="SOS"
              scrollTo="SOSSection"
              route="/sos"
            />


            {/* Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer w-10 h-10">
                  <AvatarImage src="/user.jpg" alt="User" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white dark:bg-zinc-900 text-black dark:text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-semibold"
            >
              Toggle Theme 🌗
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </button>
          </div>

          {/* Mobile Nav Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-64 h-full bg-zinc-900 shadow-lg z-40 flex flex-col p-6 text-white"
              >
                {/* ❌ Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="self-end mb-4 text-white"
                >
                  <X size={28} />
                </button>

                {/* Nav Items */}
                <NavItem
                  label="Home"
                  scrollTo="heroSection"
                  route="/"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavItem
                  label="Our Chatbot"
                  scrollTo="chatbotSection"
                  route="/chatbot"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavItem
                  label="Journal"
                  scrollTo="journalSection"
                  route="/journal"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavItem
                  label="Resources"
                  scrollTo="resourcesSection"
                  route="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavItem
                  label="Emergency Help"
                  scrollTo="emergencySection"
                  route="/helplines"
                  onClick={() => setMobileMenuOpen(false)}
                />

                <hr className="w-full border-white/20 my-4" />

                {/* Theme Toggle in Mobile */}
                <button
                  onClick={toggleTheme}
                  className="text-sm bg-white/20 px-4 py-2 rounded-full font-semibold"
                >
                  Toggle Theme 🌗
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
