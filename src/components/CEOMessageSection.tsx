import Image from "next/image";

function CEOMessageSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-secondary mb-4">
              대표 인사말
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              안녕하십니까? 파소나코리아 김태형 대표 입니다.
            </h3>
            <div className="text-right mt-4 mb-8">
              <p className="text-lg font-bold">
                (주)파소나코리아 대표
                <br />
                김태형
              </p>
            </div>
            <div className="text-secondary space-y-4">
              <p>
                파소나코리아는 2011년 설립되어 구직자 개개인의 전문성과 잘 하는
                것, 하고자 하는 것이 무엇인지 파악하고, 구직자들이 올바른 선택을
                통해 성장과 커리어 발전에 도움이 되고자 노력해 왔습니다.
                무엇보다 중요한 것은 행복하고 즐겁게 근무할 수 있는 환경이라고
                생각하며, 기업과 구직자들을 컨설팅 하였습니다.
              </p>
              <p>
                현재는 한국의 다양한 사회문제, 청년실업, 초고령자 사회(재취업
                지원 및 교육), 인구/지역 소멸, 노동인구 부족, 간병(介護) 등의
                해결을 위해 파소나 그룹의 경험을 살려서 청년들의 해외 취업,
                고령자의 재취업 교육, 정부 및 지자체와의 협업을 통한 지역 상생
                개발, 가족의 간병으로 인해 사회와 단절(직장 퇴직)이 되지 않도록
                교육 및 컨설팅 제공 등 새로운 분야에 도전을 하고 있습니다.
              </p>
              <p>
                앞으로도 대한민국 국민 모두가 자신이 하고 싶은 일을 즐겁게 할 수
                있는 행복한 고용 문화를 만들 수 있도록 노력하겠습니다.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
              <Image
                src="/images/ceo-portrait.jpg"
                alt="파소나코리아 김태형 대표"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CEOMessageSection;