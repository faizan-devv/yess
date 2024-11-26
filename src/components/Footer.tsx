import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
const Footer = () => {
  const services = [
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Campaigns", href: "/services/campaigns" },
    { name: "Branding", href: "/services/branding" },
    { name: "Offline", href: "/services/offline" },
  ];

  const about = [
    { name: "Our Story", href: "/about/our-story" },
    { name: "Benefits", href: "/about/benefits" },
    { name: "Team", href: "/about/team" },
    { name: "Careers", href: "/about/careers" },
  ];

  const help = [
    { name: "FAQs", href: "/help/faqs" },
    { name: "Contact Us", href: "/help/contact" },
  ];

  return (
    <footer className="mb-[100px] footer-section">
      <div className="px-[240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={63}
              priority
            />
            <div className="mb-6 mt-8">
              <h3 className="text-[22px] font-normal mb-5">
                Ready to get started?
              </h3>
              <Button variant="outlined">Get Started</Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[17px] leading-[21px] font-normal mb-[21px]">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-[18px] font-normal text-white mb-[21px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-[17px] leading-[21px] font-normal mb-[21px]">
              About
            </h3>
            <ul className="space-y-3">
              {about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-[18px] font-normal text-white mb-[21px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[17px] leading-[21px] font-normal mb-[21px]">
              Help
            </h3>
            <ul className="space-y-3">
              {help.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-[18px] font-normal text-white mb-[21px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="/terms"
              className="text-[15px] leading-[19px] font-normal text-white mr-10"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-[15px] leading-[19px] font-normal text-white"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex space-x-6">
            <Image
              src="/images/fb.svg"
              alt="Logo"
              width={10}
              height={20}
              priority
            />
            <Image
              src="/images/twitter.svg"
              alt="Logo"
              width={22}
              height={22}
              priority
            />
            <Image
              src="/images/insta.svg"
              alt="Logo"
              width={22}
              height={22}
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
