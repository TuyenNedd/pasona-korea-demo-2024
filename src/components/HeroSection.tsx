import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-background pt-24 pb-16 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              인재 등록하고
              <br />
              일본계 기업/일본 취업
              <br />
              채용 안내 받기
            </h1>
            <p className="text-base md:text-lg mb-8">
              일본 기업에 취업하고 싶으신가요? 지금 바로 파소나코리아에 인재
              등록을 하고,
              <br />
              일본 취업 정보 및 채용 안내를 무료로 받아보세요.
              <br />※ 개인정보 제공 동의 필요
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="btn-primary text-center">
                인재등록 하러가기
              </Link>
              <Link href="/jobs" className="btn-outline text-center">
                지금 바로 채용검색
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block h-[500px]">
            <Image
              src="/images/hero-person.jpg"
              alt="파소나코리아 인재"
              fill
              className="object-cover rounded-4xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-full h-full z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;