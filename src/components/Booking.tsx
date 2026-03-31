import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './Booking.css';

export default function Booking() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="booking" className="section booking-section">
            <div className="container">
                <div className="booking-grid">
                    {/* Form Side */}
                    <motion.div
                        className="booking-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="subtitle text-orange">SCHEDULE SERVICE</div>
                        <h2>Book Your Appointment</h2>
                        <p className="booking-desc">
                            Select your preferred date and time, and our service advisors will contact you shortly to confirm your appointment.
                        </p>

                        {isSubmitted ? (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <CheckCircle size={48} className="text-orange" />
                                <h3>Booking Confirmed!</h3>
                                <p>We've received your request and will be in touch shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-group row">
                                    <input type="text" placeholder="First Name" aria-label="First Name" required />
                                    <input type="text" placeholder="Last Name" aria-label="Last Name" required />
                                </div>

                                <div className="form-group">
                                    <input type="email" placeholder="Email Address" aria-label="Email Address" required />
                                </div>

                                <div className="form-group">
                                    <select required defaultValue="" className="form-input" aria-label="Select Service Type">
                                        <option value="" disabled>Select Service Type</option>
                                        <option value="diagnostics">Engine Diagnostics</option>
                                        <option value="brakes">Brake Repair</option>
                                        <option value="oil">Oil Change</option>
                                        <option value="tires">Tire Services</option>
                                        <option value="other">Other Maintenance</option>
                                    </select>
                                </div>

                                <div className="form-group row">
                                    <input type="date" required className="form-input" aria-label="Preferred Date" />
                                    <select required defaultValue="" className="form-input" aria-label="Preferred Time">
                                        <option value="" disabled>Preferred Time</option>
                                        <option value="morning">Morning (8am - 12pm)</option>
                                        <option value="afternoon">Afternoon (1pm - 5pm)</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn-primary full-width">
                                    Confirm Booking
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        className="booking-image-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="booking-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2650&auto=format&fit=crop")' }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
