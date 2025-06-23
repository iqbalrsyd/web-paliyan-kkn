import React from 'react';
import Image from 'next/image';

const InformasiGeografisSection = () => {
  const desaInfo = [
    {
      id: 1,
      nama: "Desa Karangduwet",
      deskripsi: "Desa Karangduwet terletak di bagian utara Kecamatan Paliyan dengan karakteristik wilayah yang didominasi oleh area pertanian dan pemukiman. Desa ini memiliki potensi wisata alam yang menarik dengan panorama persawahan yang hijau dan udara yang sejuk.",
      foto: "/images/desa/karangduwet-geografis.jpg",
      reverse: false
    },
    {
      id: 2,
      nama: "Desa Grogol", 
      deskripsi: "Desa Grogol berada di wilayah tengah Kecamatan Paliyan dengan topografi yang relatif datar. Desa ini dikenal dengan tradisi budaya yang masih kental dan masyarakat yang ramah. Mata pencaharian utama penduduk adalah bertani dan berternak.",
      foto: "/images/desa/grogol-geografis.jpg",
      reverse: true
    },
    {
      id: 3,
      nama: "Desa Pampang",
      deskripsi: "Desa Pampang terletak di bagian selatan Kecamatan Paliyan dengan kondisi geografis yang unik karena berbatasan langsung dengan kawasan karst Gunung Kidul. Desa ini memiliki potensi wisata gua dan sumber mata air alami yang jernih.",
      foto: "/images/desa/pampang-geografis.jpg", 
      reverse: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Informasi Geografis
          </h2>
        </div>

        {/* Desa Information Cards */}
        <div className="space-y-24">
          {desaInfo.map((desa) => (
            <div 
              key={desa.id}
              className={`flex flex-col lg:flex-row items-center gap-15 ${
                desa.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 lg:max-w-xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {desa.nama}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {desa.deskripsi}
                </p>
              </div>

              {/* Image Container */}
              <div className="flex-1 lg:max-w-2xl">
                <div className="relative w-full h-80 lg:h-96 bg-blue-200 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={desa.foto}
                    alt={`Geografis ${desa.nama}`}
                    fill
                    className="object-cover"
                  />
                  {/* Placeholder overlay jika gambar belum ada */}
                  <div className="absolute inset-0 bg-blue-200 flex items-center justify-center">
                    <span className="text-blue-600 text-lg font-medium">
                      Foto {desa.nama}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Information Section */}
        <div className="mt-32">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-16 tracking-tight">
            Informasi Logo
          </h2>

          {/* Logo Container */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Logo Elements Section */}
            <div className="flex-1">
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-12">
                Elemen Logo
              </h3>
              
              {/* Logo Labels */}
              <div className="space-y-8">
                <div className="text-3xl lg:text-4xl font-bold text-black">
                  Langit Biru
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-black">
                  Matahari
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-black">
                  3 Pegunungan
                </div>
              </div>
            </div>

            {/* Logo Image with Arrows */}
            <div className="flex-1 relative">
              <div className="relative w-96 h-96 mx-auto">
                {/* Logo Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-orange-200 to-green-700 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/logo/paliyan-logo.png"
                    alt="Logo Paliyan"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>

                {/* Arrows and Labels */}
                {/* Arrow to Langit Biru */}
                <div className="absolute -left-32 top-1/3">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-black mr-4">Langit Biru</span>
                    <div className="w-20 h-0.5 bg-black transform rotate-12"></div>
                  </div>
                </div>

                {/* Arrow to Matahari */}
                <div className="absolute -right-32 top-1/4">
                  <div className="flex items-center">
                    <div className="w-20 h-0.5 bg-black transform -rotate-12"></div>
                    <span className="text-2xl font-bold text-black ml-4">Matahari</span>
                  </div>
                </div>

                {/* Arrow to 3 Pegunungan */}
                <div className="absolute -right-40 bottom-1/3">
                  <div className="flex items-center">
                    <div className="w-24 h-0.5 bg-black transform rotate-12"></div>
                    <span className="text-2xl font-bold text-black ml-4">3 Pegunungan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mt-24">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-8">
              Filosofi Logo
            </h3>
            <div className="max-w-4xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Logo Paliyan Menawan menggambarkan keindahan alam Kecamatan Paliyan yang terdiri dari langit biru yang cerah melambangkan harapan dan optimisme, matahari yang bersinar melambangkan semangat dan energi positif, serta tiga pegunungan yang menggambarkan tiga desa sasaran KKN-PPM UGM yaitu Karangduwet, Grogol, dan Pampang yang saling bersinergi dalam pembangunan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformasiGeografisSection;