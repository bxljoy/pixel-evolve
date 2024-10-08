import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the services provided by PixelEvolve ("we", "our", or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services.</p>
        
        <h2>2. Description of Service</h2>
        <p>PixelEvolve provides SAAS solutions and custom software development services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.</p>
        
        <h2>3. User Accounts</h2>
        <p>You may need to create an account to use some of our services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        
        <h2>4. User Conduct</h2>
        <p>You agree not to use our services to:</p>
        <ul>
          <li>Violate any laws or regulations</li>
          <li>Infringe on the rights of others</li>
          <li>Transmit any harmful or malicious code</li>
          <li>Interfere with or disrupt our services</li>
        </ul>
        
        <h2>5. Intellectual Property</h2>
        <p>All content and materials available through our services are the property of PixelEvolve or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
        
        <h2>6. Payment and Billing</h2>
        <p>If you use our paid services, you agree to pay all fees associated with such services. We may change our fees at any time with notice.</p>
        
        <h2>7. Termination</h2>
        <p>We may terminate or suspend your access to our services at any time, without prior notice, for any reason.</p>
        
        <h2>8. Disclaimer of Warranties</h2>
        <p>Our services are provided "as is" without any warranties, express or implied.</p>
        
        <h2>9. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, PixelEvolve shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.</p>
        
        <h2>10. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
        
        <h2>11. Changes to Terms</h2>
        <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page.</p>
        
        <h2>12. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@pixelevolve.com.</p>
      </div>
    </div>
  );
}