"use client"
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import useCompany from '@/store/useCompany'
import Image from "next/image";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
export default function Footer() {
  const { logoData } = useCompany();
  return (
    <footer className="bg-blue-500 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <div className="flex flex-col items-start gap-2">
              <Image
                src={imageurlgenerator(logoData?.url as string)}
                alt=""
                width={60}
                height={60}
                className="h-20 w-20 object-fit rounded-full"
              />
              <span className="text-white font-semibold">{logoData?.name}</span>
              <p className="text-sm">
                {logoData?.slogan ||
                  "Uttarganga Power Company Limited. is a leading hydroelectric power generation company committed to sustainable energy development."}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white">
                  Projects
                </Link>
              </li>


              <li>
                <Link href="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white">
                <MapPin className="h-4 w-4 mt-1 " />
                <span>Tripureshwor, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <Phone className="h-4 w-4 " />
                <span>01-4953039 / 01-4153239 / 01-4153040</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <Mail className="h-4 w-4 " />
                <span>vgpci@nea.org.np</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gallery" className="text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/notice" className="text-white">
                  Notices
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-white">
                  Activities
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            {logoData?.name || "Nepal HydroPower Limited"}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
