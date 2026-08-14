"use client";
import React, { useState } from 'react'
import OtherBackground from '../../components/OtherBackground'
import FeesPage from '../../components/Registration'
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FileText, Maximize2, X } from "lucide-react";

function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
     <div className="min-h-screen py-18 relative">
      <OtherBackground/>
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
      Call for Sponsorship
    </h2>

    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-900 to-purple-900 mx-auto mt-4 rounded-full"></div>

    <p className="mt-8 max-w-5xl mx-auto text-slate-900 font-semibold leading-relaxed text-base md:text-lg bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 shadow-lg">
      We invite industries, research laboratories, government organizations,
      startups, and academic institutions to partner with us as sponsors.
      Sponsorship provides an excellent opportunity to showcase your
      organization, interact with researchers and professionals, and contribute
      to scientific advancement and innovation.
    </p>
  </div>

 

  {/* Sponsorship Categories */}
  <h3 className="text-center text-3xl font-bold text-slate-900 mb-8">
    Sponsorship Categories
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
  {[
    {
      title: "Platinum Sponsor",
      amount: "₹3 Lacs",
      image: "/spons-platinum.png",
      benefits: [
        "Registration for 3 Persons",
        "Display Stall Facility",
        "Food & Registration Kit",
        "Presentation Slot Available",
        "Logo on Banner & Published Materials",
        "Logo in Registration Kit",
      ],
    },
    {
      title: "Gold Sponsor",
      amount: "₹2 Lacs",
      image: "/spons-gold.png",
      benefits: [
        "Registration for 2 Persons",
        "Display Stall Facility",
        "Food & Registration Kit",
        "Logo on Banner & Published Materials",
      ],
    },
    {
      title: "Silver Sponsor",
      amount: "₹1 Lac",
      image: "/spons-silver.png",
      benefits: [
        "Registration for 1 Person",
        "Display Stall Facility",
        "Food & Registration Kit",
        "Logo on Banner & Published Materials",
      ],
    },
    {
      title: "Bronze Sponsor",
      amount: "₹50 Thousand",
      image: "/spons-bronze.png",
      benefits: [
        "Registration for 1 Person",
        "Food & Registration Kit",
        "Logo on Banner & Published Materials",
      ],
    },
  ].map((tier) => (
    <div
      key={tier.amount}
      className="bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
    >
      {/* Medal Image */}
      <div className="flex justify-center mb-5">
        <img
          src={tier.image}
          alt={tier.title}
          className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Sponsor Title */}
      <h4 className="text-center text-purple-900 font-extrabold text-xl tracking-wide mb-4">
        {tier.title}
      </h4>

      {/* Amount */}
      <div className="flex justify-center mb-6">
        <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white text-2xl font-bold shadow-lg">
          {tier.amount}
        </span>
      </div>

      {/* Benefits */}
      <ul className="space-y-4">
        {tier.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex gap-3 text-slate-900 font-semibold"
          >
            <div className="w-2 h-2 bg-purple-700 rounded-full mt-2 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

  {/* Partial Sponsorship */}
  <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl mb-2 text-center">
    <h3 className="text-2xl font-bold text-slate-900 mb-4">
      Partial Sponsorship
    </h3>

    <p className="text-slate-900 font-semibold">
      Organizations interested in partial sponsorship opportunities may contact:
    </p>

    <div className="mt-4 flex justify-center">
      <span className="px-5 py-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-bold shadow-md">
        <a
            href="mailto:cmdays2026@nitrkl.ac.in"
            className="text-purple-700 font-bold underline"
          >cmdays2026@gmail.com</a>
       
      </span>
    </div>
  </div>
   {/* GST Note */}
  <p className="text-center text-red-700 font-bold mb-10 mt-4">
  *18% GST is applicable on all sponsorship categories.
</p>

  {/* Payment Details & Sponsorship PDF Side-by-Side */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
    {/* Left Column: Payment Details */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-200 flex flex-col justify-between"
    >
      <div className="bg-gradient-to-r from-purple-800 to-purple-700 p-5">
        <h2 className="text-2xl font-bold text-white text-center">
          Payment Details
        </h2>
        <p className="text-purple-200 text-center text-sm mt-1">
          Bank Transfer via UPI / NEFT / IMPS
        </p>
      </div>
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex justify-between items-center border-b border-purple-200 pb-2">
            <span className="font-semibold text-purple-900">
              Account Number:
            </span>
            <span className="text-purple-700 font-mono font-bold">
              36734418111
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-purple-200 pb-2">
            <span className="font-semibold text-purple-900">
              Account Name:
            </span>
            <span className="text-purple-700">
              Conference, NIT Rourkela
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-purple-200 pb-2">
            <span className="font-semibold text-purple-900">
              IFSC Code:
            </span>
            <span className="text-purple-700 font-mono">SBIN0002109</span>
          </div>
          <div className="flex justify-between items-center border-b border-purple-200 pb-2">
            <span className="font-semibold text-purple-900">
              Bank & Branch:
            </span>
            <span className="text-purple-700">
              SBI, NIT Campus, Rourkela
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-purple-200 pb-2">
            <span className="font-semibold text-purple-900">
              Merchant Name:
            </span>
            <span className="text-purple-700">
              CONFERENCE NIT ROURKELA
            </span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="font-semibold text-purple-900">UPI ID:</span>
            <span className="text-purple-700 font-mono font-bold">
              2804180418@sbi
            </span>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="mt-4 pt-4 border-t border-purple-200">
          <p className="text-purple-800 text-sm font-medium text-center mb-3">
            Scan QR Code for UPI Payment
          </p>
          <div className="flex justify-center">
            <div className="relative w-36 h-36 bg-purple-100 rounded-xl border-2 border-purple-300 flex items-center justify-center">
              <Image
                src="/qr-placeholder.png"
                alt="UPI QR Code"
                width={128}
                height={128}
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement("div");
                    fallback.className =
                      "text-purple-600 text-xs text-center p-2";
                    fallback.innerText = "QR Code\nPlaceholder";
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Right Column: Sponsorship PDF Document */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-200 flex flex-col justify-between"
    >
      <div className="bg-gradient-to-r from-purple-800 to-purple-700 p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-white">
          <FileText className="w-6 h-6 shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold">
            Sponsorship Brochure
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/Sponsorship-CMDAYS-2026.pdf"
            download="Sponsorship-CMDAYS-2026.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Expand
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        {/* PDF Preview Frame */}
        <div className="flex-1 min-h-[380px] rounded-xl overflow-hidden border border-purple-200 shadow-inner bg-slate-900">
          <iframe
            src="/Sponsorship-CMDAYS-2026.pdf#toolbar=0&navpanes=0"
            className="w-full h-full min-h-[380px]"
            title="Sponsorship Brochure PDF Preview"
            style={{ border: "none" }}
          >
            <div className="p-6 text-center text-white">
              <p className="mb-4">Your browser does not support inline PDF previews.</p>
              <a
                href="/Sponsorship-CMDAYS-2026.pdf"
                download="Sponsorship-CMDAYS-2026.pdf"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold underline"
              >
                Click here to download the Sponsorship PDF
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </motion.div>
  </div>

          {/* Full Screen PDF Modal Overlay */}
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-900 to-purple-800 text-white shrink-0">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5" />
                    <h3 className="text-lg font-bold">
                      CM DAYS 2026 - Sponsorship Brochure
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="/Sponsorship-CMDAYS-2026.pdf"
                      download="Sponsorship-CMDAYS-2026.pdf"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-semibold transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* PDF Full Frame */}
                <div className="flex-1 overflow-hidden bg-slate-100">
                  <iframe
                    src="/Sponsorship-CMDAYS-2026.pdf"
                    className="w-full h-full"
                    title="Sponsorship Brochure PDF Full Screen"
                    style={{ border: "none" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
       

  
  
</div>
 

</div>
    


)     
    
}

export default page
