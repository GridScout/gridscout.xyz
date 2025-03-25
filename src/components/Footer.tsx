import Link from "next/link";
import Image from "next/image";
import React from "react";
import { LINKS } from "~/lib/constants";

const Footer = () => {
  return (
    <div className="pt-16">
      <footer className="w-full border-t-2 border-stroke py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Logo Section */}
            <div className="flex items-center md:col-span-1">
              <div className="mr-3">
                <Image
                  src="/favicon.ico"
                  alt="GridScout Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-bold text-white">GridScout</span>
            </div>

            <div className="md:col-span-1">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    target="_blank"
                    href={LINKS.DISCORD_INVITE}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Invite
                  </Link>
                </li>
                <li>
                  <Link
                    href={LINKS.DOCS}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={LINKS.GITHUB}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    GitHub
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/changelog"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Change Logs
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    target="_blank"
                    href={LINKS.DISCORD_SUPPORT}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={LINKS.EMAIL}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={LINKS.STATUS}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Legal Stuff
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={LINKS.TERMS_OF_SERVICE}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href={LINKS.PRIVACY_POLICY}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
