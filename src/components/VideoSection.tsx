import Image from "next/image";

function VideoSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
          <Image
            src="/images/video-thumbnail.jpg"
            alt="파소나코리아 소개 영상"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <button
              className="w-20 h-20 rounded-full bg-white bg-opacity-25 flex items-center justify-center hover:bg-opacity-40 transition-all"
              aria-label="비디오 재생"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;