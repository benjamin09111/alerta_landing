import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bell, Battery, Smartphone, ShieldCheck, Users } from 'lucide-react';

const features = [
    {
        icon: <Bell className="w-8 h-8" />,
        title: "Instant Alerts",
        description: "One press sends an immediate SOS to your emergency contacts and local authorities."
    },
    {
        icon: <MapPin className="w-8 h-8" />,
        title: "Real-time GPS",
        description: "Live location tracking ensures help can find you exactly where you are."
    },
    {
        icon: <Battery className="w-8 h-8" />,
        title: "Long Battery Life",
        description: "Up to 1 year of battery life. No need to charge daily."
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "App Integration",
        description: "Seamlessly connects with our intuitive mobile app for easy configuration."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Durable Design",
        description: "Water-resistant and built to withstand daily wear and tear."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Community Safety",
        description: "Join a network of users dedicated to making our streets safer."
    }
];

export const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why Choose <span className="text-secondary">ALERTA</span>?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Packed with advanced technology to ensure your safety in any situation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
                        >
                            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center text-secondary mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                            <p className="text-slate-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
