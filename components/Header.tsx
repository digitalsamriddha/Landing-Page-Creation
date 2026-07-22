import Image from "next/image";

export function Header() {
  return (
    <header className="relative z-10 py-7 sm:py-9">
      <div className="mx-auto w-32 sm:w-40">
        <Image
          src="/digital-samriddha-logo.png"
          alt="Digital Samriddha — AI Marketing Expert & Consultant"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full"
        />
      </div>
    </header>
  );
}
