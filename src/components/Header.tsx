import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="block">
          <Image
            src="/images/logo.png"
            alt="파소나코리아 로고"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/jobs"
            className="text-primary font-medium hover:opacity-80 transition-opacity"
          >
            채용검색
          </Link>
          <Link
            href="/register"
            className="text-primary font-medium hover:opacity-80 transition-opacity"
          >
            인재등록
          </Link>
          <Link
            href="/jobhaku"
            className="text-primary font-medium hover:opacity-80 transition-opacity"
          >
            JOBHAKU KOREA
          </Link>
          <Link
            href="/services"
            className="text-primary font-medium hover:opacity-80 transition-opacity"
          >
            서비스
          </Link>
          <Link
            href="/about"
            className="text-primary font-medium hover:opacity-80 transition-opacity"
          >
            파소나 그룹
          </Link>
          <Link
            href="/contact"
            className="text-primary font-medium hover:opacity-80 transition-opacity"
          >
            문의하기
          </Link>
        </nav>
        <button className="md:hidden text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;