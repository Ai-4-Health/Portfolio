import { Button } from "@/components/Button";
import { ArrowRight, Download, Globe, Mail, MessageSquare } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Github, Instagram, Twitter, Facebook } from "@/components/SocialIcons";


export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/*Bg*/}
            <div className="absolute inset-0">
                <img 
                    src="hero-bg.jpg" 
                    alt="Hero Image" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/*Green Dots*/}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor:"#6EE600",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animateDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/*Content*/}
            <div className="container mx-auto px-auto pt-32 pb-28 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/*Left Column - Text Content*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                AI 4 Health . Intelligent Healthcare Solutions
                            </span>
                        </div>

                        {/*Headline*/}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                                Solution <span className="text-primary glow-text">Intelligence</span>
                                <br />
                                that mainly deals with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    checking peoples health.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-800">
                                I build intelligent, scalable AI solutions that solve real-world problems.
                                With a passion for innovation and expertise in machine learning
                                and data science, I turn complex challenges into actionable
                                insights and seamless user experiences.
                            </p>
                        </div>

                        {/*CTA Buttons*/}
                        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                           <AnimatedBorderButton />
                        </div>

                        {/*Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {[
                                { icon: Globe, href: "#" },
                                { icon: Mail, href: "#" },
                                { icon: MessageSquare, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Facebook, href: "#" },
                            ].map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.href} 
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};