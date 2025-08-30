import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Form() {
    const { t } = useTranslation();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
        console.error('Error sending:', error);
        alert('An error occurred while sending. Please try again.');
        });
    };

    return (
    <form onSubmit={handleSubmit} className='text-white w-full flex flex-col gap-4'>

        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("name")}
            required
        />
      
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t("email")}
        />

        <textarea
            className='btn-border border rounded-lg h-40 w-full px-4 py-2 resize-none focus:outline-none'
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t("message")}
        />

        <button type="submit" className='btn-border btn-form'>{t("submit")}</button>
    </form>
    );
    }

export default Form;