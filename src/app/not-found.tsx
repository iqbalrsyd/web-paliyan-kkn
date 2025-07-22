"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Logo Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 lg:w-32 lg:h-32">
            <Image
              src="/logo-kkn.png"
              alt="KKN-PPM UGM Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Development Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
          <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Dalam Pengembangan
        </div>

        {/* Main Message */}
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
          Halaman Sedang
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 block">
            Dikembangkan
          </span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari sedang dalam tahap pengembangan. 
          Tim KKN-PPM UGM Paliyan sedang bekerja keras untuk memberikan 
          pengalaman terbaik untuk Anda.
        </p>

        {/* Features Coming Soon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Desa Karangduwet</h3>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Desa Grogol</h3>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Desa Pampang</h3>
          </div>
        </div>

        {/* Countdown & Action */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {countdown}
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Anda akan diarahkan ke halaman utama dalam <span className="font-bold text-blue-600">{countdown}</span> detik
          </p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://instagram.com/paliyanmenawan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Instagram KKN Paliyan"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C8.396 0 7.929.013 6.71.054 5.487.095 4.669.24 3.948.43c-.75.193-1.433.477-2.085 1.128C1.226 2.204.951 2.896.761 3.64c-.195.721-.348 1.539-.389 2.762C.333 7.621.32 8.088.32 11.709c0 3.621.013 4.088.054 5.307.041 1.223.186 2.041.376 2.762.19.744.465 1.436 1.102 2.073.637.637 1.329.912 2.073 1.102.721.19 1.539.335 2.762.376 1.219.041 1.686.054 5.307.054 3.621 0 4.088-.013 5.307-.054 1.223-.041 2.041-.186 2.762-.376.744-.19 1.436-.465 2.073-1.102.637-.637.912-1.329 1.102-2.073.19-.721.335-1.539.376-2.762.041-1.219.054-1.686.054-5.307 0-3.621-.013-4.088-.054-5.307-.041-1.223-.186-2.041-.376-2.762-.19-.744-.465-1.436-1.102-2.073-.637-.637-1.329-.912-2.073-1.102-.721-.19-1.539-.335-2.762-.376C16.105.013 15.638 0 12.017 0zM12.017 2.163c3.557 0 3.975.013 5.372.054 1.297.059 2.002.274 2.473.457.622.242 1.066.532 1.533.999.467.467.757.911.999 1.533.183.471.398 1.176.457 2.473.041 1.397.054 1.815.054 5.372 0 3.557-.013 3.975-.054 5.372-.059 1.297-.274 2.002-.457 2.473-.242.622-.532 1.066-.999 1.533-.467.467-.911.757-1.533.999-.471.183-1.176.398-2.473.457-1.397.041-1.815.054-5.372.054-3.557 0-3.975-.013-5.372-.054-1.297-.059-2.002-.274-2.473-.457-.622-.242-1.066-.532-1.533-.999-.467-.467-.757-.911-.999-1.533-.183-.471-.398-1.176-.457-2.473C2.176 15.992 2.163 15.574 2.163 12.017c0-3.557.013-3.975.054-5.372.059-1.297.274-2.002.457-2.473.242-.622.532-1.066.999-1.533.467-.467.911-.757 1.533-.999.471-.183 1.176-.398 2.473-.457 1.397-.041 1.815-.054 5.372-.054z"/>
              <path d="M12.017 5.838c-3.403 0-6.179 2.776-6.179 6.179s2.776 6.179 6.179 6.179 6.179-2.776 6.179-6.179-2.776-6.179-6.179-6.179zM12.017 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              <path d="M19.846 5.595c0 .795-.646 1.441-1.441 1.441-.795 0-1.441-.646-1.441-1.441 0-.795.646-1.441 1.441-1.441.795 0 1.441.646 1.441 1.441z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
