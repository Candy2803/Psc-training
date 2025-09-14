import React from 'react';
import { Phone, Mail, User } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: '📞 Call Us',
      details: ['+254-728-023465', 'Ready to answer your questions']
    },
    {
      icon: Mail,
      title: '✉️ Email Us',
      details: ['info@psctraining.co.ke', 'Get detailed program information']
    },
    {
      icon: User,
      title: '👨‍💼 Your Coach',
      details: ['Gamaliel Gerishom Malungu', 'Leadership and Productivity Coach & Trainer', 'Transforming teens into confident leaders']
    }
  ];

  return (
    <section className="bg-white py-16" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-center border-2 border-indigo-900 shadow-lg shadow-indigo-900/10"
            >
              <h3 className="text-indigo-900 text-xl font-bold mb-4">{contact.title}</h3>
              {contact.details.map((detail, detailIndex) => (
                <p key={detailIndex} className={`text-lg mb-2 ${detailIndex === 0 && index === 2 ? 'text-purple-500 font-bold' : 'text-gray-600'}`}>
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;