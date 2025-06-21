import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Paliyan Menawan</div>
                <div className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Profil</a>
                    <a href="/about" className="text-gray-300 hover:text-white">Program Kerja</a>
                    <a href="/services" className="text-gray-300 hover:text-white">Komunikasi Warga</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Untuk Kita</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;