"use client";

export default function FiveVideoOverlap() {
  const videos = [
    "https://res.cloudinary.com/dacrmefxl/video/upload/v1752255359/Bmw_m4_g82_-Rohan_XD_zwtrgg.mp4", // top-left
    "https://res.cloudinary.com/dacrmefxl/video/upload/v1752254749/Porsche_911_Gt3_Rs_-Rohan_XD_ncr0k2.mp4", // top-right
    "https://res.cloudinary.com/dacrmefxl/video/upload/q_auto,f_auto/background_dckcrd.mp4", // center
    "https://res.cloudinary.com/dacrmefxl/video/upload/Buggati_Chiron_-Rohan_XD_uekd2v.mp4", // bottom-left
    "https://res.cloudinary.com/dacrmefxl/video/upload/Nissan_Gtr_R34_-Rohan_XD_dwlfy6.mp4", // bottom-right
  ];

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Corner Videos (desktop) */}
      <div className="hidden sm:block absolute top-0 left-0 w-[35%] h-[35%]">
        <video
          src={videos[0]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="hidden sm:block absolute top-0 right-0 w-[35%] h-[35%]">
        <video
          src={videos[1]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="hidden sm:block absolute bottom-0 left-0 w-[35%] h-[35%]">
        <video
          src={videos[3]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0 w-[35%] h-[35%]">
        <video
          src={videos[4]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Center Overlapping Video (always visible) */}
      <div className="relative z-10 w-[90%] sm:w-[70%] md:w-[50%] h-[40%] sm:h-[50%]">
        <video
          src={videos[2]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Mobile stacked corner videos */}
      <div className="absolute bottom-4 left-0 right-0 flex sm:hidden justify-center gap-2 flex-wrap">
        {[videos[0], videos[1], videos[3], videos[4]].map((v, idx) => (
          <video
            key={idx}
            src={v}
            autoPlay
            loop
            muted
            playsInline
            className="w-[45%] h-32 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
