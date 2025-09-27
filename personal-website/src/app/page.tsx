import Image from "next/image";

export default function Home() {



  return (
    <>
      {/* Header */}
      <div className="flex w-screen justify-center gap-5">
        <div>
          <Image src="/amal_pixel_art.png" width={160} height={160} className="rounded-full" alt="Pixel Art of Amal" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl">Amal Saju Kalarickal</h1>
        </div>
      </div>
      {/* Nav */}
      <div>

      </div>
    </>
  );
}
