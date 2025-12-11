import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900 text-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-slate-400">
                        Have questions about ALERTA? Our team is here to help you.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-secondary transition-colors"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <Button variant="primary" className="w-full">Send Message</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
