import Image from "next/image";
import { Button, Box } from "@mui/material";

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
    <footer id="footer" className="mb-8 md:mb-16 lg:mb-[100px] footer-section">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[240px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Logo and Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={63}
              priority
              className="max-w-[100px] md:max-w-[120px]"
            />
            <div className="my-4 space-y-4">
              <h6 className="text-base md:text-[17px] font-medium">Office Location:</h6>
              <a
                href="https://www.google.com/maps?q=Al+Yamama+Company+for+trading+and+Contracting,+Muhammed+Ibn+Saud,+5470+al+hareth+bin+morah+al+amir%D8%8C+Dammam+32241"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Box className="max-w-[230px]">
                  <h6 className="text-base md:text-[17px] font-normal mb-4">
                    King Abdulaziz Road, Riyad, KSA
                  </h6>
                </Box>
              </a>
              <h6 className="text-base md:text-[17px] font-medium">Head Office Location:</h6>
              {/* <a
                href="https://www.google.com/maps?q=Al+Yamama+Company+for+trading+and+Contracting,+Muhammed+Ibn+Saud,+5470+al+hareth+bin+morah+al+amir%D8%8C+Dammam+32241"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              > */}
                <Box className="max-w-[230px]">
                  <h6 className="text-base md:text-[17px] font-normal mb-4">
                    8384, Prince Mohammed Bin Fahd Road, Al Firdaws, 5237 PO Box 2150 Postal Code 34251
                  </h6>
                </Box>
             {/*  </a> */}
              <h6 className="text-base md:text-[17px] font-normal mb-4">
                Quick Contact: +966-13-828-1002
              </h6>
              <Button variant="outlined" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-base md:text-[17px] leading-[21px] font-normal mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Box className="text-sm md:text-[15px] leading-[18px] font-normal text-white mb-3">
                    {item.name}
                  </Box>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-base md:text-[17px] leading-[21px] font-normal mb-4">
              About
            </h3>
            <ul className="space-y-3">
              {about.map((item) => (
                <li key={item.name}>
                  <Box className="text-sm md:text-[15px] leading-[18px] font-normal text-white mb-3">
                    {item.name}
                  </Box>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-base md:text-[17px] leading-[21px] font-normal mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {help.map((item) => (
                <li key={item.name}>
                  <Box className="text-sm md:text-[15px] leading-[18px] font-normal text-white mb-3">
                    {item.name}
                  </Box>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center sm:items-start">
            <Box className="text-sm md:text-[15px] leading-[19px] font-normal text-white sm:mr-10">
              Terms & Conditions
            </Box>
            <Box className="text-sm md:text-[15px] leading-[19px] font-normal text-white">
              Privacy Policy
            </Box>
          </div>

          <div className="flex space-x-6 mt-6 sm:mt-0">
            <Image
              src="/images/fb.svg"
              alt="Facebook"
              width={10}
              height={20}
              priority
              className="w-4 sm:w-auto"
            />
            <Image
              src="/images/twitter.svg"
              alt="Twitter"
              width={22}
              height={22}
              priority
              className="w-5 sm:w-auto"
            />
            <Image
              src="/images/insta.svg"
              alt="Instagram"
              width={22}
              height={22}
              priority
              className="w-5 sm:w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;