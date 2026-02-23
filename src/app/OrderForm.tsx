'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function OrderForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: 'Organic Apple & Oats Mash',
        quantity: '1',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Construct the WhatsApp message
        const message = `*New Order for Nutrimize* 🥣
--------------------------
*Name:* ${formData.name}
*Product:* ${formData.product}
*Quantity:* ${formData.quantity}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
${formData.message ? `*Special Note:* ${formData.message}` : ''}
--------------------------
_Sent via Nutrimize Website_`;

        // Nutrimize WhatsApp Number (+94 77 666 1006)
        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Set success state locally
        setStatus('success');
        // Reset form but keep email for the success message display if needed (though we reset it in the next line)
        const submittedEmail = formData.email;
        setFormData({ name: '', email: submittedEmail, phone: '', product: 'Organic Apple & Oats Mash', quantity: '1', message: '' });
    };

    return (
        <section id="order" className={`section bg-white ${styles.orderSection}`}>
            <div className="container">
                <div className={styles.orderContainer}>
                    <div className={styles.orderInfo}>
                        <h2 className={styles.sectionTitle}>Place Your Order</h2>
                        <p>Fill out the form below to place your order with Nutrimize. We'll get back to you immediately to confirm the delivery details.</p>
                        <div className={styles.orderHighlight}>
                            <p>📍 Freshly made specifically for your order</p>
                            <p>🚚 Fast & reliable delivery</p>
                            <p>💚 100% natural, no preservatives</p>
                        </div>
                    </div>
                    <div className={`glass-card ${styles.orderCard}`}>
                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <h3>Thank you for your order!</h3>
                                <p>We have received your details and will contact you shortly at <strong>{formData.email}</strong>.</p>
                                <button className="btn" onClick={() => setStatus('idle')}>Place Another Order</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="e.g. +1 234 567 890"
                                        />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="product">Select Product</label>
                                        <select
                                            id="product"
                                            required
                                            value={formData.product}
                                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                        >
                                            <option>Multi Grain Cereal</option>
                                            <option>Unsalted Sprats Powder</option>
                                            <option>Spinach, Pea & Pear Blend</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="quantity">Quantity</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            min="1"
                                            required
                                            value={formData.quantity}
                                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Special Instructions (Optional)</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Any allergies or specific requests?"
                                    />
                                </div>
                                <button type="submit" className="btn" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Opening WhatsApp...' : 'Confirm Order on WhatsApp'}
                                </button>
                                {status === 'error' && <p className={styles.errorMessage}>Oops! Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
