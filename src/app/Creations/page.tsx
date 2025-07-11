"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function FiveVideoOverlap() {
  const videos = [
    "https://res.cloudinary.com/dacrmefxl/video/upload/v1752255359/Bmw_m4_g82_-Rohan_XD_zwtrgg.mp4",
    "https://res.cloudinary.com/dacrmefxl/video/upload/v1752254749/Porsche_911_Gt3_Rs_-Rohan_XD_ncr0k2.mp4",
    "https://res.cloudinary.com/dacrmefxl/video/upload/q_auto,f_auto/background_dckcrd.mp4",
    "https://res.cloudinary.com/dacrmefxl/video/upload/Buggati_Chiron_-Rohan_XD_uekd2v.mp4",
    "https://res.cloudinary.com/dacrmefxl/video/upload/Nissan_Gtr_R34_-Rohan_XD_dwlfy6.mp4",
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-16 px-4 sm:px-10">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-transparent bg-clip-text">
          Featured Creations
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A blend of smooth transitions, color grading, and cinematic edits crafted to perfection.
        </p>
      </div>

      {/* Center Featured Video */}
      <div className="relative z-10 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[280px] sm:h-[360px] mb-8">
        <Card className="bg-neutral-900 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-0 h-full">
            <video
              src={videos[2]}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-3xl"
            />
          </CardContent>
        </Card>
      </div>

      {/* Bottom Videos Grid (All Devices) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[videos[0], videos[1], videos[3], videos[4]].map((v, idx) => (
          <Card
            key={idx}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border border-white/5 hover:border-pink-500/30"
          >
            <CardContent className="p-0 h-32 sm:h-36">
              <video
                src={v}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
