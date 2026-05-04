import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import logo from "@/assets/logo.png";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
    {href: "#testimonials", label: "Testimonials"},
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a 
                    href="#" 
                    className="flex items-center gap-3"
                >
                    <img src={logo} alt="AI 4 Health" className="w-10 h-10 rounded-full" />
                    <span className="text-[#5dc800] font-semibold text-lg hidden sm:block">AI 4 Health</span>
                </a>

                {/*Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a 
                            href={link.href} 
                            key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/*CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                className="md:hidden p-2 text-foreground cursor-pointer" 
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/*Mobile Menu */}
            {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a
                        href={link.href} 
                        key={index} 
                        className="text-lg text-muted-foreground hover:text-foreground py-2"
                        >
                            {link.label}
                        </a>
                    ))}

                    <Button>Contact Me</Button>
                </div>
            </div>)}
    </header>
    );
};