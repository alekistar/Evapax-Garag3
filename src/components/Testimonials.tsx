import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Michael Chen',
        role: 'BMW M4 Owner',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        review: 'The only place I trust with my M4. Their attention to detail and transparency is unmatched. They fixed a complex transmission issue that the dealership couldn\'t diagnose.'
    },
    {
        name: 'Sarah Jenkins',
        role: 'Audi Q7 Driver',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
        review: 'Professional, clean facility, and incredible staff. They walked me through exactly what needed to be done for my brakes and didn\'t try to upsell me on anything.'
    },
    {
        name: 'David Rodriguez',
        role: 'Porsche 911 Enthusiast',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        review: 'Evapax Garag3 is the gold standard. Finding mechanics who understand high-performance engines is tough, but these guys are absolute masters of their craft.'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-heading">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="subtitle text-orange"
                    >
                        CLIENT REVIEWS
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        What Our Customers Say
                    </motion.h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="card-top">
                                <Quote className="quote-icon text-orange" size={40} />
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-orange fill-orange" />
                                    ))}
                                </div>
                            </div>

                            <p className="review-text">"{t.review}"</p>

                            <div className="client-info">
                                <img src={t.image} alt={t.name} className="client-image" />
                                <div className="client-details">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
