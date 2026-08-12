type Project = {
  name: string;
  english?: string;
  summary: string;
  status: "운영 중" | "개발 중" | "공개 안내";
  href?: string;
  linkLabel?: string;
};

type ProjectGroup = {
  label: string;
  description: string;
  projects: Project[];
};

const projectGroups: ProjectGroup[] = [
  {
    label: "일상과 커뮤니티",
    description: "사람들의 취향, 이동, 관계와 동네 생활을 돕는 제품",
    projects: [
      {
        name: "찐로맛",
        english: "Jjinlomat",
        summary: "오래 산 로컬의 추천을 중심으로 동네 맛집을 찾는 지도 서비스입니다.",
        status: "운영 중",
        href: "https://jlm.pc2.kr/",
        linkLabel: "사이트 보기",
      },
      {
        name: "언제더라",
        english: "WhenDidI",
        summary: "마지막으로 한 일을 아이콘으로 기록하고 위젯으로 확인하는 주기 관리 앱입니다.",
        status: "운영 중",
        href: "https://proxima-e.github.io/-When-Did-I-WEB/",
        linkLabel: "사이트 보기",
      },
      {
        name: "볼라운지",
        english: "BallLounge",
        summary: "응원팀은 나누되 개인 신상은 드러내지 않는 텍스트 중심 야구 팬 커뮤니티입니다.",
        status: "개발 중",
        href: "https://blounge.pc2.kr/",
        linkLabel: "사이트 보기",
      },
      {
        name: "SubwayMate",
        summary: "여행자가 수도권 지하철을 여러 언어로 찾고 이동할 수 있도록 돕는 길찾기 앱입니다.",
        status: "개발 중",
        href: "https://metro.pc2.kr/",
        linkLabel: "사이트 보기",
      },
      {
        name: "Alltime5",
        summary: "나의 인생곡 다섯 곡을 고르고 국가별·글로벌 순위를 살펴보는 앱입니다.",
        status: "개발 중",
        href: "https://at5.pc2.kr/",
        linkLabel: "사이트 보기",
      },
      {
        name: "TabTabHelp",
        summary: "부모님의 매회 동의 아래 가족이 휴대폰 사용을 원격으로 돕는 도구입니다.",
        status: "개발 중",
        href: "https://tabtabhelp-api.proxima1527.workers.dev/",
        linkLabel: "사이트 보기",
      },
    ],
  },
  {
    label: "일과 창작",
    description: "반복 작업을 줄이고 문서와 콘텐츠 제작을 돕는 제품",
    projects: [
      {
        name: "프록시마셀",
        english: "Proxima Cell",
        summary: "한국어로 요청해 엑셀 수식·집계·표·차트를 만드는 스프레드시트 도구입니다.",
        status: "운영 중",
        href: "https://cell.pc2.kr/",
        linkLabel: "사이트 보기",
      },
      {
        name: "HOP Automate",
        summary: "한글 문서 양식과 엑셀 데이터를 연결해 반복 문서를 만드는 데스크톱 도구입니다.",
        status: "운영 중",
        href: "https://hop-automate-production.proxima1527.workers.dev/",
        linkLabel: "사이트 보기",
      },
      {
        name: "자소서랩",
        english: "JasoseoLab",
        summary: "채용 사이트의 반복적인 지원서 입력을 사용자의 검토 아래 보조하는 Windows 앱입니다.",
        status: "운영 중",
        href: "https://jss.pc2.kr/",
        linkLabel: "사이트 보기",
      },
      {
        name: "ProximaVideo",
        summary: "한국어 상업 광고를 기획하고 15초 영상으로 만드는 모바일·데스크톱 제작 도구입니다.",
        status: "개발 중",
      },
      {
        name: "X Writer",
        summary: "한국어 원고를 영어로 다듬고 이미지와 함께 X 게시물로 준비하는 데스크톱 앱입니다.",
        status: "공개 안내",
        href: "https://github.com/proxima-e/x-wirter",
        linkLabel: "GitHub 보기",
      },
    ],
  },
  {
    label: "도구와 실험",
    description: "파일, 시스템과 구매 선택을 더 편하게 만드는 작은 도구",
    projects: [
      {
        name: "다모아 뷰어",
        english: "DamoaViewer",
        summary: "문서·표·프레젠테이션·이미지와 영상을 한곳에서 읽는 모바일 뷰어입니다.",
        status: "개발 중",
        href: "https://github.com/proxima-e/DamoaViewer-Support",
        linkLabel: "지원 페이지",
      },
      {
        name: "CatchMac",
        summary: "창, 영역과 긴 화면을 캡처해 바로 복사할 수 있는 macOS 메뉴 막대 앱입니다.",
        status: "공개 안내",
        href: "https://catchmac-support.proxima0110.chatgpt.site/",
        linkLabel: "지원 페이지",
      },
      {
        name: "MemoryClear",
        summary: "비정상적인 RAM 증가와 메모리 누수 가능성을 살펴보는 Windows 진단 도구입니다.",
        status: "공개 안내",
        href: "https://github.com/proxima-e/momory-clear",
        linkLabel: "GitHub 보기",
      },
      {
        name: "프록시마 가성비 마켓",
        summary: "가격이 납득되는 해외 직구 상품을 카테고리별로 모아보는 작은 큐레이션입니다.",
        status: "운영 중",
        href: "https://gsb.pc2.kr/",
        linkLabel: "사이트 보기",
      },
    ],
  },
];

const publicProjects = projectGroups.flatMap((group) =>
  group.projects.filter((project) => project.href),
);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "프록시마",
  alternateName: "Proxima1527",
  url: "https://about.pc2.kr/",
  email: "admin@pc2.kr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "논산시",
    addressRegion: "충청남도",
    addressCountry: "KR",
  },
  hasPart: publicProjects.map((project) => ({
    "@type": "CreativeWork",
    name: project.english ? `${project.name} (${project.english})` : project.name,
    url: project.href,
    description: project.summary,
  })),
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-row">
      <span className="project-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="project-title">
        <h3>{project.name}</h3>
        {project.english ? <span>{project.english}</span> : null}
      </div>
      <p>{project.summary}</p>
      <div className="project-meta">
        <span className={`status status-${project.status.replaceAll(" ", "-")}`}>
          {project.status}
        </span>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.linkLabel} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="no-link">소개 페이지 준비 중</span>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <a className="skip-link" href="#projects">
        프로젝트 목록으로 이동
      </a>

      <div className="page-shell" id="top">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="프록시마 홈">
            <span aria-hidden="true">P</span>
            <strong>
              프록시마 <small>Proxima1527</small>
            </strong>
          </a>
          <nav aria-label="주요 메뉴">
            <a href="#projects">프로젝트</a>
            <a href="#about">소개</a>
            <a href="mailto:admin@pc2.kr">문의</a>
          </nav>
        </header>

        <main>
          <section className="hero" aria-labelledby="hero-title">
            <p className="eyebrow">Independent software studio · Nonsan, Korea</p>
            <h1 id="hero-title">
              만들고 있는 것들을
              <br />
              한곳에 모았습니다.
            </h1>
            <div className="hero-bottom">
              <p>
                프록시마는 생활과 일에서 반복되는 작은 불편을 줄이는 모바일,
                데스크톱, 웹 제품을 만듭니다.
              </p>
              <a href="#projects">
                프로젝트 둘러보기 <span aria-hidden="true">↓</span>
              </a>
            </div>
          </section>

          <section className="projects" id="projects" aria-labelledby="projects-title">
            <div className="section-intro">
              <p>Projects</p>
              <h2 id="projects-title">진행 중인 프로젝트</h2>
              <span>공개된 페이지와 현재 개발 중인 작업을 함께 정리했습니다.</span>
            </div>

            <div className="project-groups">
              {projectGroups.map((group, groupIndex) => (
                <section className="project-group" key={group.label}>
                  <header>
                    <h3>{group.label}</h3>
                    <p>{group.description}</p>
                  </header>
                  <div className="project-list">
                    {group.projects.map((project, index) => (
                      <ProjectRow
                        project={project}
                        index={
                          projectGroups
                            .slice(0, groupIndex)
                            .reduce(
                              (count, previousGroup) =>
                                count + previousGroup.projects.length,
                              0,
                            ) + index
                        }
                        key={project.name}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="about" id="about" aria-labelledby="about-title">
            <div>
              <p className="eyebrow">About Proxima</p>
              <h2 id="about-title">작지만 실제로 쓰이는 소프트웨어.</h2>
            </div>
            <div className="about-copy">
              <p>
                프록시마는 충남 논산에서 제품을 기획하고 개발하는 독립 소프트웨어
                스튜디오입니다. 문제를 작게 나누고, 직접 써보며, 오래 유지할 수 있는
                형태로 만드는 일을 중요하게 생각합니다.
              </p>
              <dl>
                <div>
                  <dt>분야</dt>
                  <dd>모바일 · 데스크톱 · 웹</dd>
                </div>
                <div>
                  <dt>위치</dt>
                  <dd>대한민국 충청남도 논산시</dd>
                </div>
                <div>
                  <dt>문의</dt>
                  <dd>
                    <a href="mailto:admin@pc2.kr">admin@pc2.kr</a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </main>

        <footer>
          <p>© {new Date().getFullYear()} Proxima1527</p>
          <a href="#top">맨 위로 ↑</a>
        </footer>
      </div>
    </>
  );
}
