"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const pathname = usePathname();

  if (!pathname.includes("dashboard")) {
    return (
      <div className="bg-fh-gray-20">
        <div className="footer sm:footer-horizontal container text-base-content p-10">
          <div>
            <Link href={""}>
              <Image
                src={"/assets/logo.png"}
                width={170}
                height={80}
                alt="logo image"
              />
            </Link>
            <div className="mt-10 ">
              <h5 className="text-fh-block relative z-10 ">Download App:</h5>
              <div className="sm:flex sm:space-x-4 space-y-3 sm:space-y-0 mt-4">
                <Image
                  width={130}
                  height={40}
                  src="/assets/apple.png"
                  alt="App Store"
                  className=""
                />
                <Image
                  width={130}
                  height={40}
                  src="/assets/google.png"
                  alt="Google Play"
                  className=""
                />
              </div>
            </div>
          </div>

          <nav>
            <h6 className="footer-title">Quick links 1</h6>
            <Link href={""} className="link link-hover">
              Home
            </Link>
            <Link href={""} className="link link-hover">
              Shope
            </Link>
            <Link href={""} className="link link-hover">
              About
            </Link>
            <Link href={""} className="link link-hover">
              Detail Blog
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Quick links 2</h6>
            <Link href={""} className="link link-hover">
              Favorites
            </Link>
            <Link href={""} className="link link-hover">
              Cart
            </Link>
            <Link href={""} className="link link-hover">
              Sign in
            </Link>
            <Link href={""} className="link link-hover">
              Register
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Contact us</h6>
            <div className="flex items-center gap-1">
              <IoIosCall className="text-fh-green text-2xl" />
              <span>1234 5678 90</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMailOutline className="text-fh-green text-2xl" />
              <span>Freshharvests@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 ">
              <IoLocationOutline className="text-fh-green text-2xl" />
              <span>Tanjung Sari Street, Pontianak, Indonesia</span>
            </div>
            <div>
              <h3 className="font-semibold mt-2">Accepted Payment Methods:</h3>
              <ul className="flex gap-4 mt-3">
                <li className="h-16 ">
                  <Image
                    src={"/assets/paymentLogo/pay1.png"}
                    width={95}
                    height={67}
                    className="h-16"
                    alt="logo image "
                  />
                </li>
                <li className=" h-12">
                  <Image
                    src={"/assets/paymentLogo/pay2.png"}
                    width={95}
                    height={60}
                    alt="logo image"
                    className="h-16"
                  />
                </li>
                <li className=" h-18 ">
                  <Image
                    src={"/assets/paymentLogo/pay3.png"}
                    width={95}
                    height={65}
                    className="h-16"
                    alt="logo image"
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="footer sm:footer-horizontal border-t border-fh-gray-50  items-center p-4">
            <aside className="grid-flow-col items-center">
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                Banana Studio
              </p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <Link
                className=" w-12 h-12 bg-fh-block text-white rounded-full flex justify-center items-center"
                href={""}
              >
                <FaTwitter className="text-xl" />
              </Link>
              <Link
                className=" w-12 h-12 bg-fh-block text-white rounded-full flex justify-center items-center"
                href={""}
              >
                <FaFacebookF className="text-xl" />
              </Link>
              <Link
                className=" w-12 h-12 bg-fh-block text-white rounded-full flex justify-center items-center"
                href={""}
              >
                <FaInstagram className="text-xl" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Footer;
