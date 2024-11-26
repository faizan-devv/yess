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
    <footer id="footer" className="mb-[100px] footer-section">
      <div className="px-[240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <div className="">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={63}
              priority
            />
            <div className="my-4">
              <h6 className="text-[17px] font-normal mb-1">Office Location:</h6>
              <a
                href="https://www.google.com/maps?q=Al+Yamama+Company+for+trading+and+Contracting,+Muhammed+Ibn+Saud,+5470+al+hareth+bin+morah+al+amir%D8%8C+Dammam+32241&ftid=0x3e49fb73dfc682bf:0x62aad8072ecbec45&hl=en-SA&gl=sa&entry=gps&coh=0&g_ep=CAISBjYuNDAuNBgAINeCAw%3D%3D&g_st=iw"
                target="_blank"
              >
                <Box sx={{ maxWidth: "230px" }}>
                  <h6 className="text-[17px] font-normal mb-5 ">
                    8384, Prince Mohammed Bin Fahd Road, Al Firdaws, 5237 PO Box
                    2150 Postal Code 34251
                  </h6>
                </Box>
              </a>
              <h6 className="text-[17px] font-normal mb-6">
                Quick Contact: +966-13-828-1002
              </h6>

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
                  <Box className="text-[15px] leading-[18px] font-normal text-white mb-[21px]">
                    {item.name}
                  </Box>
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
                  <Box className="text-[15px] leading-[18px] font-normal text-white mb-[21px]">
                    {item.name}
                  </Box>
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
                  <Box className="text-[15px] leading-[18px] font-normal text-white mb-[21px]">
                    {item.name}
                  </Box>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Box className="text-[15px] leading-[19px] font-normal text-white mr-10">
              Terms & Conditions
            </Box>
            <Box className="text-[15px] leading-[19px] font-normal text-white">
              Privacy Policy
            </Box>
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
