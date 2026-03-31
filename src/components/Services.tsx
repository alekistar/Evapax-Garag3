import { motion } from 'framer-motion';
import { Settings, Droplet, Disc, Wrench } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Settings size={32} />,
        title: 'Engine Diagnostics',
        description: 'Advanced computer diagnostics to identify and resolve complex engine issues perfectly.',
        bgImage: '/assets/engine_diagnostic.png'
    },
    {
        icon: <Disc size={32} />,
        title: 'Brake Repair',
        description: 'Complete brake system inspection, pad replacement, and rotor resurfacing for your safety.',
        bgImage: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=2670&auto=format&fit=crop'
    },
    {
        icon: <Droplet size={32} />,
        title: 'Oil Changes',
        description: 'Premium synthetic oil changes to keep your engine running smoothly and efficiently.',
        bgImage: '/assets/oil_change.png'
    },
    {
        icon: <Wrench size={32} />,
        title: 'Tire Services',
        description: 'Expert tire rotation, balancing, alignment, and replacement for optimal handling.',
        bgImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2564&auto=format&fit=crop'
    }
];

export default function Services() {
    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="section-heading">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="subtitle text-orange"
                    >
                        OUR EXPERTISE
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Featured Services
                    </motion.h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div
                                className="service-bg"
                                style={{ backgroundImage: `url(${service.bgImage})` }}
                            ></div>
                            <div className="service-overlay"></div>
                            <div className="service-content">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
