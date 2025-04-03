import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">회사 정보</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  회사 소개
                </Link>
              </li>
              <li>
                <Link
                  href="/about/ceo"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  대표 인사말
                </Link>
              </li>
              <li>
                <Link
                  href="/about/history"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  회사 연혁
                </Link>
              </li>
              <li>
                <Link
                  href="/about/location"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/recruitment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  인재 소개 서비스
                </Link>
              </li>
              <li>
                <Link
                  href="/services/jobhaku"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  JOBHAKU 일본 채용 박람회
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  기업 대상 인사노무 컨설팅
                </Link>
              </li>
              <li>
                <Link
                  href="/services/training"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  연수/교육/세미나 운영
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">고객지원</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  이용약관
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">연락처</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>서울특별시 중구 세종대로 39</p>
              <p>대한상공회의소 빌딩 11층</p>
              <p>전화: 02-6730-5800</p>
              <p>이메일: info@pasona.co.kr</p>
            </address>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://cafe.naver.com/jobhakukorea"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="네이버 카페"
              >
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
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </Link>
              <Link
                href="https://blog.naver.com/pasonakorea"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="네이버 블로그"
              >
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} 파소나코리아. All rights reserved.
          </p>
          <p className="mt-2">
            파소나코리아는 일본 파소나 그룹의 계열사입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;