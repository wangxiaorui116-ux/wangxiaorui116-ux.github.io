import Image from "next/image";

const visualProjectUrl =
  "https://github.com/wangxiaorui116-ux/NUS_SOC_Visual_Computing_Project_26Summer";
const modelingProjectUrl =
  "https://github.com/wangxiaorui116-ux/Mathmatical_modeling_HUASHUCUP";
const githubUrl = "https://github.com/wangxiaorui116-ux";

const focusAreas = [
  "Visual Computing",
  "Mathematical Modeling",
  "Reproducible Engineering",
];

const experiences = [
  {
    year: "2026",
    organization: "NUS School of Computing",
    title: "SWS3026 Visual Computing",
    description:
      "参与实时人脸与人体关键点分析小组项目，将视觉感知、时序处理与交互设计整合为四个可运行应用。",
  },
  {
    year: "2026",
    organization: "华数杯数学建模竞赛",
    title: "A 题 · 微构体导电仿真优化",
    description:
      "围绕三维几何、图连通、Monte Carlo 与概率约束优化，完成从确定性判定到可靠最低成本设计的统一模型链。",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页顶部">
          <span className="brand-mark" aria-hidden="true">
            W
          </span>
          <span className="brand-name">王骁睿</span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-roman">WANGXIAORUI</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#experience">经历</a>
          <a className="nav-contact" href="#contact">
            联系我
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-main">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              PORTFOLIO / 2026
            </p>
            <h1 id="hero-title">
              王骁睿
              <span>WANGXIAORUI</span>
            </h1>
            <p className="hero-copy">
              来自华中科技大学，关注视觉计算、人工智能与数学建模。我喜欢把模型从实验推向可交互、可复现、可验证的工程成果。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                查看精选项目
                <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-quiet"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="hero-index" aria-label="关注方向">
            <div>
              <p className="index-label">FOCUS / 关注方向</p>
              <ol>
                {focusAreas.map((area, index) => (
                  <li key={area}>
                    <span>0{index + 1}</span>
                    {area}
                  </li>
                ))}
              </ol>
            </div>
            <p className="availability">
              <span className="status-dot" aria-hidden="true" />
              LEARNING · BUILDING · SHARING
            </p>
          </aside>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="section-label">01 / ABOUT</p>
            <h2 id="about-title">把想法做成可以被验证的作品。</h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              我的兴趣横跨计算机视觉、交互系统与数据驱动建模。面对一个问题，我既关心方法是否成立，也关心它能否稳定运行、清楚呈现，并让别人复现。
            </p>
            <p>
              最近的实践包括一套实时关键点交互应用，以及围绕微构体导电问题构建的完整仿真优化链路。两者看似不同，背后都在回答同一个问题：如何把抽象模型变成可信、可用的系统。
            </p>
          </div>
          <div className="about-facts" aria-label="个人项目概览">
            <div>
              <strong>02</strong>
              <span>FEATURED PROJECTS</span>
            </div>
            <div>
              <strong>04</strong>
              <span>INTERACTIVE CV APPS</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>NUS SOC · SWS3026</span>
            </div>
          </div>
        </section>

        <section
          className="projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="projects-heading">
            <div>
              <p className="section-label section-label-light">02 / PROJECTS</p>
              <h2 id="projects-title">精选项目</h2>
            </div>
            <p>
              从实时视觉交互到随机仿真优化：这里记录问题、方法，也记录可以复查的结果。
            </p>
          </div>

          <div className="project-list">
            <article className="project-card">
              <div className="project-visual">
                <Image
                  src="/projects/visual-computing-showcase.png"
                  alt="NUS SoC 项目展示现场，展板旁运行着姿态控制平台游戏"
                  width={900}
                  height={1200}
                  priority
                />
                <span className="project-number">01</span>
              </div>
              <div className="project-copy">
                <p className="project-kicker">TEAM PROJECT · NUS SOC · 2026</p>
                <h3>实时人脸与人体关键点分析</h3>
                <p>
                  一套 CPU 优先的视觉计算系统，将稀疏关键点转化为人脸表情特效、反应延迟感知的舞蹈评分，以及姿态控制的平台游戏。项目强调实时反馈、交互稳定性与可复现实验。
                </p>
                <ul className="tag-list" aria-label="项目技术栈">
                  <li>Python</li>
                  <li>OpenCV</li>
                  <li>YOLOv8 Pose</li>
                  <li>scikit-learn</li>
                </ul>
                <dl className="project-metrics">
                  <div>
                    <dt>04</dt>
                    <dd>交互应用</dd>
                  </div>
                  <div>
                    <dt>46.33%</dt>
                    <dd>Macro-F1</dd>
                  </div>
                  <div>
                    <dt>23.09</dt>
                    <dd>FPS 全视频基准</dd>
                  </div>
                </dl>
                <a
                  className="project-link"
                  href={visualProjectUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  查看项目仓库 <ArrowIcon />
                </a>
              </div>
            </article>

            <article className="project-card project-card-reverse">
              <div className="project-visual project-visual-contain">
                <Image
                  src="/projects/huashu-conduction-path.png"
                  alt="微构体三维介质结构与代表性导通路径"
                  width={1929}
                  height={1849}
                />
                <span className="project-number">02</span>
              </div>
              <div className="project-copy">
                <p className="project-kicker">MATHEMATICAL MODELING · 2026</p>
                <h3>微构体中填充导电介质的仿真优化</h3>
                <p>
                  面向 2026 华数杯 A 题，从有限圆柱的三维几何接触出发，构建导电图、Monte Carlo 渗流估计、90% 临界阈值认证与 A/B 混合材料最低成本设计，形成贯穿四问的统一模型链。
                </p>
                <ul className="tag-list" aria-label="项目方法">
                  <li>Computational Geometry</li>
                  <li>Graph Theory</li>
                  <li>Monte Carlo</li>
                  <li>Optimization</li>
                </ul>
                <dl className="project-metrics">
                  <div>
                    <dt>04</dt>
                    <dd>联动问题</dd>
                  </div>
                  <div>
                    <dt>0.8694%</dt>
                    <dd>保守认证填充率</dd>
                  </div>
                  <div>
                    <dt>90%</dt>
                    <dd>可靠性约束</dd>
                  </div>
                </dl>
                <a
                  className="project-link"
                  href={modelingProjectUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  查看项目仓库 <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading experience-heading">
            <p className="section-label">03 / EXPERIENCE</p>
            <h2 id="experience-title">经历与实践</h2>
          </div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-index">0{index + 1}</div>
                <time>{item.year}</time>
                <div>
                  <p>{item.organization}</p>
                  <h3>{item.title}</h3>
                </div>
                <p className="timeline-description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="section-label section-label-light">04 / CONTACT</p>
          <div className="contact-grid">
            <h2 id="contact-title">
              一起聊聊
              <span>有趣的问题。</span>
            </h2>
            <div className="contact-content">
              <p>
                如果你也在做视觉计算、智能交互或数学建模，欢迎通过 GitHub 了解更多项目与代码。
              </p>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <span>GITHUB</span>
                <strong>@wangxiaorui116-ux</strong>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} 王骁睿 WANGXIAORUI</span>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </>
  );
}
