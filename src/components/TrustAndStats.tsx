import { motion } from 'framer-motion';
import { Award, CheckCircle2, ThumbsUp, Users } from 'lucide-react';
import './TrustAndStats.css';

const stats = [
    { icon: <Award className="text-orange" size={24} />, value: '15+', label: 'Years Experience' },
    { icon: <ThumbsUp className="text-orange" size={24} />, value: '10k+', label: 'Vehicles Repaired' },
    { icon: <Users className="text-orange" size={24} />, value: '9k+', label: 'Happy Clients' },
    { icon: <CheckCircle2 className="text-orange" size={24} />, value: '100%', label: 'Satisfaction Rate' },
];

export default function TrustAndStats() {
    return (
        <section id="why-us" className="section trust-section">
            <div className="container">
                <div className="trust-grid">
                    {/* Image Side */}
                    <motion.div
                        className="trust-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="trust-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2670&auto=format&fit=crop")' }}></div>
                        <div className="experience-badge">
                            <span className="years text-orange">15+</span>
                            <span className="text">Years of<br />Excellence</span>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="trust-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="subtitle text-orange">WHY CHOOSE US</div>
                        <h2>Premier Automotive Care You Can Trust</h2>

                        <p className="trust-desc">
                            We don't just fix cars; we restore peace of mind. Our state-of-the-art facility is equipped with the latest diagnostic technology, and our team of certified master technicians ensures your vehicle receives elite-level service.
                        </p>

                        <ul className="trust-list">
                            <li>
                                <CheckCircle2 color="var(--brand-orange)" size={20} />
                                <span>Certified Master Technicians</span>
                            </li>
                            <li>
                                <CheckCircle2 color="var(--brand-orange)" size={20} />
                                <span>State-of-the-art Diagnostics</span>
                            </li>
                            <li>
                                <CheckCircle2 color="var(--brand-orange)" size={20} />
                                <span>Transparent Pricing</span>
                            </li>
                            <li>
                                <CheckCircle2 color="var(--brand-orange)" size={20} />
                                <span>Premium Quality Parts</span>
                            </li>
                        </ul>

                        <div className="stats-grid">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-card">
                                    <div className="stat-icon">{stat.icon}</div>
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
