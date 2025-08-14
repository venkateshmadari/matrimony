import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Developers",
      links: [
        { name: "Public API", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", title: "Facebook" },
    { icon: <IoLogoWhatsapp />, href: "#", title: "Whatsapp" },
    { icon: <FaInstagram />, href: "#", title: "Instagram" },
  ];

  return (
    <footer className="px-4 divide-y divide-gray-800/10" id="contact">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Brand */}
        <div className="lg:w-1/3">
          <Link
            href="/"
            className="flex justify-center space-x-3 lg:justify-start h-40 w-40"
          >
            <Image src={"/logo.png"} alt="logo" height={500} width={500} />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="tracking-wide uppercase text-primary font-caslon">
                {section.title}
              </h3>
              <ul className="space-y-1 text-gray-900">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div className="space-y-3">
            <div className="uppercase text-primary font-caslon">
              Social media
            </div>
            <div className="flex justify-start space-x-3 text-gray-700">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  title={social.title}
                  className="flex items-center p-1 text-lg"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} Company Co. All rights reserved.
      </div>
    </footer>
  );
}
