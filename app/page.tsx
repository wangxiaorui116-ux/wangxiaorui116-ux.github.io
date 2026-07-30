const sections = [
  {
    number: "01",
    title: "关于我",
    description: "这里以后可以放你的个人简介、关注方向和正在做的事情。",
    href: "#about",
  },
  {
    number: "02",
    title: "项目",
    description: "这里以后可以展示代表作品、开源项目或学习成果。",
    href: "#projects",
  },
  {
    number: "03",
    title: "经历",
    description: "这里以后可以补充教育、工作、活动或成长经历。",
    href: "#experience",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark" aria-hidden="true" />
          <span>个人主页</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#experience">经历</a>
          <a className="nav-contact" href="#contact">
            联系
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            PERSONAL SPACE
          </p>
          <h1 id="hero-title">
            你好，我是
            <span>「你的名字」</span>
          </h1>
          <p className="hero-copy">
            这是一个等待被慢慢填满的个人空间。未来，你可以在这里介绍自己、记录经历，也可以展示值得分享的作品。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">
              浏览框架
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-quiet" href="#contact">
              联系方式
            </a>
          </div>
          <div className="hero-note" aria-label="网站当前状态">
            <span className="status-dot" aria-hidden="true" />
            <span>网站框架已就绪 · 内容待补充</span>
          </div>
        </section>

        <section className="section-grid" aria-label="网站内容框架">
          {sections.map((section) => (
            <article
              className="section-card"
              id={section.href.slice(1)}
              key={section.number}
            >
              <div className="card-topline">
                <span>{section.number}</span>
                <a href={section.href} aria-label={`查看${section.title}`}>
                  ↗
                </a>
              </div>
              <div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <div className="placeholder-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </article>
          ))}
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="section-label">04 / CONTACT</p>
            <h2 id="contact-title">保持联系</h2>
          </div>
          <div className="contact-content">
            <p>邮箱、社交账号或其他联系方式可以在下一步补充到这里。</p>
            <div className="contact-links" aria-label="待补充的联系方式">
              <span>EMAIL / 待补充</span>
              <span>GITHUB / 待补充</span>
              <span>SOCIAL / 待补充</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} 你的名字</span>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </>
  );
}
