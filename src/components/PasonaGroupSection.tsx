import Image from "next/image";

function PasonaGroupSection() {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              파소나그룹의 기업이념
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              &ldquo;사회의 문제점을 해결&rdquo;
            </h3>
            <div className="text-primary space-y-4">
              <p>
                파소나 그룹의 역할은 사람의 역량을 최대한 끌어내어 풍요로운 삶을
                이끄는 것. 즉, 삶을 프로듀스 하는일 입니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">HR Solution</h4>
                  <p className="text-secondary text-sm">
                    국내 글로벌 인재 채용, 해외 현지 채용, 구직자 대상 커리어
                    컨설팅, 기업 대상 인사노무 컨설팅, 인사 세미나/이벤트 개최,
                    복리후생 아웃소싱 외
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Global Solution</h4>
                  <p className="text-secondary text-sm">
                    14개국 대상 기업 해외 진출 컨설팅, 스타트업 해외 진출 연수,
                    해외진출 희망 기업 현지 매칭 이벤트 및 연수 프로그램, 해외
                    근무자 관리, 교육/연수 인재 양성교육 외
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Regional Solution</h4>
                  <p className="text-secondary text-sm">
                    효고현 아와지시마 지방상생사업 외
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Life Solution</h4>
                  <p className="text-secondary text-sm">
                    시니어/경력단절 여성/장애인 대상 연수 및 프로그램 운영 사업
                    외
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/pasona-group-image.jpg"
                alt="파소나 그룹"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md"
                  style={{
                    backgroundColor: `hsl(${i * 36}, 70%, 60%)`,
                    transform: `translateY(${i % 2 === 0 ? "-5px" : "0"})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PasonaGroupSection;