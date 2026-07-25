import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

import { COMPANY } from "@/constants/company";

const products = [
  "Bi-Fold Doors",
  "Stacker Doors",
  "Sliding Doors",
  "Shopfront Systems",
];

const links = [
  "Home",
  "Products",
  "Projects",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        {/* CTA */}

        <div className="relative flex flex-col items-center justify-between gap-6 border-b border-white/10 py-12 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Ready to Start Your Project?
            </h2>

            <p className="mt-2 text-gray-400">
              Get in touch with our team for a free consultation and quote.
            </p>
          </div>
          <Link href="/contact#enquiry-form">
            <Button
              size="lg"
              className="bg-primary text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90"
            >
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Main Footer */}

        <div className="relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <h3 className="text-2xl font-bold text-white">
              {COMPANY.name}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Premium aluminium windows, doors, and shopfront
              solutions for homes and businesses throughout Sydney.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href=""
                    className="
                      text-gray-400
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-primary
                    "
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}

          <div>
            <h4 className="font-semibold text-white">
              Featured Products
            </h4>

            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li
                  key={product}
                  className="text-gray-400 before:mr-2 before:text-primary before:content-['•']"
                >
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold text-white">
              Contact
            </h4>

            <div className="mt-4 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />

                <p className="text-gray-300">
                  {COMPANY.address}
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />

                <p className="text-gray-300">
                  {COMPANY.phone}
                </p>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" />

                <p className="text-gray-300">
                  {COMPANY.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}