import React, { useState } from 'react';
import Section from '../layout/Section.jsx';
import ContactInfo from './ContactInfo.jsx';
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

// --- Contact Component ---
// Displays contact information.
function Contact() {
  return <>
    <Section id="contact" title="Contact Information" icon={MessageSquare}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContactInfo icon={Mail} title="Email" info="msaksham8120@gmail.com" href="mailto:msaksham8120@gmail.com" />ī
        <ContactInfo icon={Phone} title="Phone" info="+91 7389621937" href="tel:+917389621937" />
        <ContactInfo icon={Github} title="GitHub" info="https://github.com/smsaksham" href="https://github.com/smsaksham" isLink={true} />
        <ContactInfo icon={MapPin} title="Address" info="105/WARD 8, SLICE 3, ARANYA NAGAR, INDORE 452010" />
        <ContactInfo icon={Linkedin} href="linkedin.com/in/saksham-malviya" info= "Linkedin : Saksham Malviya" isLink={true} />
      </div>
    </Section>
  </>
}

export default Contact;