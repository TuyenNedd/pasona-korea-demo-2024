import Image from "next/image";
import Link from "next/link";

function JobHakuSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              JOBHAKU KOREA
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              잡하쿠 코리아
            </h3>
            <p className="text-secondary mb-8">
              산업인력공단과 일본의 HR전문기업으로서 오랜 노하우를 보유하고 있는
              파소나기 공동 주최하는 이공계 대상 일본 취업 면접회입니다. 일본의
              우량 제조/IT 기업들이 신입/3년이하 기졸자 사원을 매년 모집합니다.
              매년 가을 온라인 면접 혹은 서울에서의 대면 면접을 통해 우수한 국내
              인재들을 채용합니다.
            </p>
            <Link
              href="https://cafe.naver.com/jobhakukorea"
              target="_blank"
              className="btn-primary inline-block"
            >
              잡하쿠 네이버카페 바로가기
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/jobhaku-image-1.jpg"
                alt="잡하쿠 코리아 이미지 1"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/jobhaku-image-2.jpg"
                alt="잡하쿠 코리아 이미지 2"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/jobhaku-image-3.jpg"
                alt="잡하쿠 코리아 이미지 3"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobHakuSection;