// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useFirstLogo } from "@/service/apiHooks/logo.hook";
// import Image from "next/image";
// import { imageurlgenerator } from "@/utils/imageurlgenerator";
// import useCompany from "@/store/useCompany";
// import { useEffect, useState } from "react";
// export default function Navbar() {
//   const pathname = usePathname();
//   const { data: logoData, isLoading } = useFirstLogo();
//   const { setLogoData } = useCompany();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     if (logoData) {
//       setLogoData(logoData);
//     }
//   }, [logoData, setLogoData]);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/projects", label: "Projects" },
//     { href: "/notice", label: "Notices" },
//     { href: "/activities", label: "Activities" },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           {isLoading ? (
//             <div className="flex items-center space-x-2">
//               <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
//               <div>
//                 <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-1" />
//                 <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
//               </div>
//             </div>
//           ) : (
//             <Link href="/" className="flex items-center space-x-2">
//               <Image
//                 src={imageurlgenerator(logoData?.url as string)}
//                 alt=""
//                 width={40}
//                 height={40}
//                 className="h-10 w-10 object-contain"
//               />
//               <div>
//                 <div className="text-xl font-bold text-gray-900">
//                   {logoData?.name || "Uttarganga Power"}
//                 </div>
//                 <div className="text-xs text-gray-600">
//                   {logoData?.slogan ? logoData.slogan : "Powering the Nation"}
//                 </div>
//               </div>
//             </Link>
//           )}
//           {/* Desktop NavLinks */}
//           <div className="hidden md:flex space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`px-4 py-2 rounded text-sm font-medium transition ${pathname === link.href
//                   ? "bg-blue-500 text-white"
//                   : "text-gray-700 hover:bg-gray-100"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//           {/* Hamburger for Mobile */}
//           <button
//             className="md:hidden flex items-center justify-center p-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
//             aria-label="Open menu"
//             onClick={() => setDrawerOpen(true)}
//           >
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Mobile Drawer */}
//       <div
//         className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//         onClick={() => setDrawerOpen(false)}
//         aria-hidden={!drawerOpen}
//       >
//         <div
//           className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
//           onClick={e => e.stopPropagation()}
//         >
//           <div className="flex items-center justify-between px-4 py-4 border-b">
//             <span className="text-lg font-bold">Menu</span>
//             <button
//               className="p-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
//               aria-label="Close menu"
//               onClick={() => setDrawerOpen(false)}
//             >
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <nav className="flex flex-col mt-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`px-4 py-3 text-base font-medium rounded transition ${pathname === link.href
//                   ? "bg-blue-500 text-white"
//                   : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                 onClick={() => setDrawerOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFirstLogo } from "@/service/apiHooks/logo.hook";
import Image from "next/image";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import useCompany from "@/store/useCompany";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: logoData, isLoading } = useFirstLogo();
  const { setLogoData } = useCompany();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    if (logoData) {
      setLogoData(logoData);
    }
  }, [logoData, setLogoData]);

  const navLinks = [
    // { href: "/", label: "Home" },
    {
      href: "",
      label: "About Us",
      submenu: [
        { href: "/about", label: "Company Information" },
        { href: "/about/company-bod", label: "Company BOD" },
        { href: "/about/company-management", label: "Company Management" },
      ],
    },
    { href: "/projects", label: "Projects" },
    { href: "/notice", label: "Notices" },
    { href: "/activities", label: "Activities" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
              <div>
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-1" />
                <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ) : (
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={imageurlgenerator(logoData?.url as string)}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />

              <div>
                <div className="text-xl font-bold text-gray-900">
                  {logoData?.name || "Uttarganga Power"}
                </div>

                <div className="text-xs text-gray-600">
                  {logoData?.slogan ? logoData.slogan : "Powering the Nation"}
                </div>
              </div>
            </Link>
          )}

          {/* Desktop NavLinks */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const isAboutActive =
                link.submenu &&
                link.submenu.some((item) => pathname === item.href);

              if (link.submenu) {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-4 py-2 rounded text-sm font-medium transition ${
                        pathname === link.href || isAboutActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* About Us Dropdown */}
                    <div className="absolute left-0 top-full pt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-md shadow-lg border border-gray-200 py-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-3 text-sm transition ${
                              pathname === item.href
                                ? "bg-blue-500 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded text-sm font-medium transition ${
                    pathname === link.href
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="text-lg font-bold">Menu</span>

            <button
              className="p-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col mt-2">
            {navLinks.map((link) => {
              if (link.submenu) {
                const isSubmenuActive = link.submenu.some(
                  (item) => pathname === item.href,
                );

                return (
                  <div key={link.href}>
                    {/* About Us */}
                    <button
                      className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded transition ${
                        pathname === link.href || isSubmenuActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setAboutOpen(!aboutOpen)}
                    >
                      <span>{link.label}</span>

                      <svg
                        className={`w-5 h-5 transition-transform ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Submenu */}
                    {aboutOpen && (
                      <div className="bg-gray-50">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block pl-8 pr-4 py-3 text-sm transition ${
                              pathname === item.href
                                ? "bg-blue-100 text-blue-600 font-medium"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => setDrawerOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-base font-medium rounded transition ${
                    pathname === link.href
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </nav>
  );
}
