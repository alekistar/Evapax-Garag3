import { Wrench, Phone, MapPin, Mail, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <a href="#" className="logo">
                        <Wrench className="text-orange" size={28} />
                        <span>Evapax Garag3</span>
                    </a>
                    <p className="footer-desc">
                        Premium car repair and maintenance services. We combine years of expertise with state-of-the-art diagnostics to keep your vehicle running at its best.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Engine Diagnostics</a></li>
                        <li><a href="#">Brake Repair</a></li>
                        <li><a href="#">Oil Changes</a></li>
                        <li><a href="#">Tire Services</a></li>
                        <li><a href="#">Transmission</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <MapPin size={18} className="text-orange" />
                            <span>123 Mechanic Ave, Detroit, MI 48201</span>
                        </li>
                        <li>
                            <Phone size={18} className="text-orange" />
                            <span>(555) 123-4567</span>
                        </li>
                        <li>
                            <Mail size={18} className="text-orange" />
                            <span>service@apexauto.repair</span>
                        </li>
                        <li>
                            <Clock size={18} className="text-orange" />
                            <span>Mon-Fri: 8am - 6pm | Sat: 9am - 2pm</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Evapax Garag3. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
