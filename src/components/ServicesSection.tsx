import Image from "next/image";

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl bg-white h-full">
      <div className="w-16 h-16 flex items-center justify-center mb-4">
        <Image
          src={`/images/${icon}`}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-secondary whitespace-pre-line">{description}</p>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "service-icon-1.svg",
      title: "인재 소개 서비스",
      description:
        "외국어 가능 인재, 글로벌 인재 소개 서비스, \n해외 현지 채용, 외국인 국내 채용 등 \n다양한 인재 소개 서비스를 제공하고 있습니다.\n\n・전문직(경력직) 인재소개\n・채용 컨설팅\n・해외/일본 취업지원\n・구직자 대상 커리어 컨설팅",
    },
    {
      icon: "service-icon-2.svg",
      title: "JOBHAKU 일본 채용 박람회",
      description:
        "이공계 졸업자를 대상으로 일본 현지 기업들의 \n채용 면접회를 연 1회~2회 운영하고 있습니다.",
    },
    {
      icon: "service-icon-3.svg",
      title: "기업 대상 인사노무 컨설팅",
      description:
        "기업 대상으로 국내외 인재확보, 인사 및 노무 관련 컨설팅 등 기업상황에 따른 맞춤형 컨설팅을 진행하고 있습니다.\n\n・취업규칙 및 각종 규정 작성 대행\n・인사제도, 평가제도 구축 및 개정\n・일본기업 급여 조사 등",
    },
    {
      icon: "service-icon-4.svg",
      title: "연수/교육/세미나 운영",
      description:
        "・재한일본계기업 대상 승급/급여/복리후생 기업조사 세미나\n・법정의무교육 (한국어/일본어) ・주재원 교육 (일본어)  \n・퇴직자/시니어 교육\n・일본 지방상생사업 현지 시찰 연수 운영 \n・해외 취업 관련 세미나 및 교육프로그램 운영",
    },
    {
      icon: "service-icon-5.svg",
      title: "일본 및 14개국 대상 해외진출 지원",
      description:
        "파소나 그룹의 전세계 14개국 거점을 통해\n일반기업과 스타트업의 해외 진출 모색이 \n가능합니다.  \n\n ・해외 진출을 고려하는 기업대상 컨설팅\n・현지 시찰, 판로개척, BPO서비스 지원\n ・스타트업 대상, 현지 인큐베이터/엑셀러레이터 방문 및 기업 매칭 이벤트 등 참가",
    },
    {
      icon: "service-icon-6.svg",
      title: "지방상생, 노인/여성/장애인 특화 사업",
      description:
        "파소나 그룹의 오랜 노하우를 통해 아와지시마 지방상생 컨설팅, 노인/여성/장애인에 특화된 지원 프로그램 등 관련하여 컨설팅 및 교육/연수, 현지 시찰 프로그램 운영을 하고 있으며, 전략 파트너쉽 체결하여, \n간병(개호) 서비스 교육 및 컨설팅 등",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            파소나 코리아의 서비스
          </h2>
          <p className="text-secondary text-lg">
            파소나 코리아의 주요 서비스를 소개합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;