import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PixelEvolve</h3>
            <p className="text-sm">Innovative SAAS and custom software solutions to evolve your digital presence.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">SAAS Solutions</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Custom Software Development</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Cloud Services</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">AI Integration</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Twitter</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">GitHub</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Discord</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 PixelEvolve. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors mr-4">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;