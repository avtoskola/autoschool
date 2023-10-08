// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
//
// import { ABOUT, PLATFORM, RESOURCES, SOLUTIONS } from '@/components/layout/header/constants';
//
// import CustomDialog from '@/components/common/dialog';
// import DisclosureComponent from '@/components/common/disclosure';
//
// export default function MobileMenu() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const router = useRouter();
//
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [router.pathname]);
//   return (
//     <>
//       <div className="flex lg:hidden p-6">
//         <button
//           type="button"
//           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//           onClick={() => setMobileMenuOpen(true)}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
//             stroke="currentColor" aria-hidden="true" className="h-6 w-6">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
//           </svg>
//         </button>
//       </div>
//       <CustomDialog isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
//         <div
//           className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <Link href="/" className="-m-4 p-2.5">
//               <span className="sr-only">Brandgility</span>
//               <Image
//                 width={150}
//                 height={58}
//                 src="/images/Brandgility_Black-1024x394.png"
//                 alt="logo"
//               />
//             </Link>
//             <button
//               type="button"
//               className="rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
//                 stroke="currentColor" aria-hidden="true" className="h-6 w-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <DisclosureComponent label="Solutions" options={SOLUTIONS}/>
//                 <DisclosureComponent label="Platform" options={PLATFORM}/>
//                 <Link
//                   href="/pricing"
//                   className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Pricing
//                 </Link>
//                 <DisclosureComponent label="Resources" options={RESOURCES}/>
//                 <DisclosureComponent label="About" options={ABOUT}/>
//               </div>
//               <div className="py-6">
//                 <Link
//                   href="/demo"
//                   className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Book a demo
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </CustomDialog>
//     </>
//   );
// }
