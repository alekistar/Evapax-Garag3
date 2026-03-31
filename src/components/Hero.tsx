import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            {/* Video Background */}
            <div className="hero-bg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                    poster="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2574&auto=format&fit=crop"
                >
                    <source src="/assets/car_interior.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="hero-badge">
                        <Star className="text-orange fill-orange" size={16} />
                        <span>Top Rated Auto Repair in Detroit</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants}>
                        Premium Service.<br />Uncompromised <span className="text-orange glow-text">Quality.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        Experience the next level of automotive care. Our elite mechanics use state-of-the-art diagnostics to ensure your vehicle performs at its absolute best.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <a href="#booking" className="btn-primary pulse-hover">
                            Book Appointment <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn-outline glass-hover">
                            Explore Services
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
