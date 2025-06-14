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

const Navbar = () => {
  const { toggleTheme } = useTheme();

    const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

   
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past threshold → hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up → show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);




  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed w-full z-30 flex justify-between items-center p-4 shadow-md backdrop-blur-lg bg-black/40"
        >
           <ScrollLink
        to="heroSection"
        smooth={true}
        duration={800}
        className="text-white font-[Savate] font-extrabold text-4xl cursor-pointer"
      >
        Mind
        <span className="bg-indigo-700 text-transparent bg-clip-text">
          Mate
        </span>
      </ScrollLink>

      <div className="flex items-center gap-8">
        <NavItem label="Home" scrollTo="heroSection" route="/" />
        <NavItem
          label="Our Chatbot"
          scrollTo="chatbotSection"
          route="/chatbot"
        />
        <NavItem label="Journal" scrollTo="journalSection" route="/journal" />
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

        {/* 🔽 Profile Dropdown */}
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

        {/* 🌗 Toggle Theme */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-semibold"
        >
          Toggle Theme 🌗
        </button>
        {/* 🧪 Simulate Login/Logout (for testing only)
<button
  onClick={() => {
    if (localStorage.getItem("authToken")) {
      localStorage.removeItem("authToken");
    } else {
      localStorage.setItem("authToken", "test_token");
    }
    window.location.reload(); // Refresh to re-render with new auth state
  }}
  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-semibold"
>
  Toggle Login
</button> */}
      </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
