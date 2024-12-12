import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="">
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-4 text-primary-foreground">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <p>Customer Support: support@xypherdrone.com</p>
              <p>Phone: +1 (800) 123-4567</p>
              <p className="break-words">
                Address: 1234 Aerial Ave, Suite 567, Sky City, Country
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4 text-primary-foreground">
              <h3 className="text-lg font-semibold ">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="hover:text-muted-foreground">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-muted-foreground">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-muted-foreground">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="hover:text-muted-foreground">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-muted-foreground">
                  <Youtube className="w-6 h-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Legal and Compliance */}
            <div className="space-y-4 text-primary-foreground">
              <h3 className="text-lg font-semibold">Legal and Compliance</h3>
              <p>&copy; 2024 Xypher Drone Solutions. All rights reserved.</p>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-muted-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-muted-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-muted-foreground">
                    Compliance & Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
