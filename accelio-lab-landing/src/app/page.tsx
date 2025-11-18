export default function Home() {
  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Approach", href: "#approach" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Insights", href: "#insights" },
    { name: "FAQ", href: "#faq" },
  ];

  const logos = ["TechNova", "BlueBridge", "OmniTrust", "CortexOne", "Northwind", "Helios"];

  const solutions = [
    {
      title: "AI Infrastructure Blueprint",
      description:
        "Comprehensive current-state assessment, opportunity mapping, ROI modeling, and a 6-18 month transformation roadmap aligned to your business targets.",
      deliverables: ["Executive vision workshops", "Architecture recommendations", "ROI & adoption model"],
    },
    {
      title: "Platform Engineering & MLOps",
      description:
        "Design and deploy scalable AI platforms across cloud or hybrid environments with automated pipelines, feature stores, and observability baked in.",
      deliverables: ["Reference architectures", "CI/CD & model ops", "Observability playbooks"],
    },
    {
      title: "Data Fabric Modernization",
      description:
        "Upgrade data pipelines, governance, and security controls to unlock enterprise-wide AI delivery without compromising compliance or trust.",
      deliverables: ["Data quality automation", "Policy enforcement", "Access & lineage controls"],
    },
  ];

  const stats = [
    { label: "AI workloads accelerated", value: "48+" },
    { label: "Average time-to-value unlocked", value: "11 weeks" },
    { label: "Enterprise platforms launched", value: "23" },
    { label: "Average ROI in year one", value: "3.7x" },
  ];

  const approach = [
    {
      title: "Envision & Align",
      description:
        "We gather business priorities, map stakeholder objectives, and quantify the outcomes AI must deliver.",
    },
    {
      title: "Engineer & Instrument",
      description:
        "Our team builds the infrastructure stack, integrates data services, and hardens the platform for production.",
    },
    {
      title: "Operationalize & Scale",
      description:
        "We launch playbooks, upskill teams, and implement guardrails that keep models reliable and compliant at scale.",
    },
  ];

  const caseStudies = [
    {
      industry: "Global Logistics",
      headline: "Unified demand forecasting platform delivered a 4.1x inventory ROI",
      points: [
        "Consolidated 18 disjointed data sources into a single feature mesh",
        "Automated model deployment and monitoring across 3 regions",
        "Reduced forecasting cycle time from 9 days to 36 hours",
      ],
    },
    {
      industry: "Enterprise SaaS",
      headline: "Realtime customer intelligence increased expansion revenue by 19%",
      points: [
        "Implemented streaming data lakehouse with privacy-first governance",
        "Deployed ML experimentation hub with automated reproducibility",
        "Aligned GTM, product, and data science teams around shared metrics",
      ],
    },
    {
      industry: "Financial Services",
      headline: "Model risk framework unlocked regulator approval in record time",
      points: [
        "Established cross-functional AI governance council and controls",
        "Built lineage-aware model registry with automated audit reports",
        "Cut remediation effort by 63% across mission-critical models",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "Accelio Lab transformed our fragmented data estate into a unified AI platform. Our time-to-deploy new models dropped from months to days.",
      name: "Lena Patel",
      role: "SVP Analytics, OmniTrust",
    },
    {
      quote:
        "The team translated our strategy into a tangible infrastructure roadmap and owned delivery end-to-end. They operate like an embedded strike team.",
      name: "David Chen",
      role: "CTO, Northwind Manufacturing",
    },
  ];

  const faqs = [
    {
      question: "How quickly can we see value?",
      answer:
        "We typically launch foundational wins within the first 8-12 weeks, with roadmap execution aligned to a 6-18 month horizon depending on complexity.",
    },
    {
      question: "Do you work alongside internal teams?",
      answer:
        "Yes. We integrate with your engineering, data, and compliance teams to co-deliver, transfer knowledge, and ensure sustainable ownership post-engagement.",
    },
    {
      question: "Which industries do you specialize in?",
      answer:
        "We partner with medium to large enterprises in finance, logistics, SaaS, healthcare, and advanced manufacturing—where mission-critical reliability matters.",
    },
    {
      question: "Can you support regulated environments?",
      answer:
        "Absolutely. Our architects have deep experience across SOC 2, HIPAA, GDPR, and regional regulatory frameworks with clear documentation and audit trails.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <header className="sticky top-0 z-20 border-b border-border/60 bg-surface/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white text-lg font-semibold text-primary">
              AL
            </span>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-900">
                Accelio Lab
              </p>
              <p className="text-xs text-muted">
                AI Infrastructure Consulting
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted/80 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#capabilities"
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
            >
              Our Practice
            </a>
            <a
              href="mailto:hello@accelio.ai?subject=Strategy%20session%20request"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              Book Strategy Call
            </a>
          </div>
          <span className="inline-flex items-center rounded-full border border-border px-3 py-2 text-sm font-semibold text-slate-900 md:hidden">
            Accelio Lab
          </span>
        </div>
        <details className="border-t border-border bg-surface px-6 md:hidden">
          <summary className="mx-auto flex max-w-6xl cursor-pointer items-center justify-between py-3 text-sm font-semibold text-slate-900">
            Menu
          </summary>
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 pb-4 text-sm font-medium text-muted/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:hello@accelio.ai?subject=Strategy%20session%20request"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary-dark"
            >
              Book Strategy Call
            </a>
          </nav>
        </details>
      </header>

      <main className="relative z-10 flex-1">
        <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 md:pb-32 md:pt-20">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Intelligent infrastructure. Real outcomes.
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Build reliable AI systems that scale with enterprise ambition.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                Accelio Lab partners with medium to large organizations to architect, deploy, and operationalize AI infrastructure that meets mission-critical standards. We translate your strategic intent into production-ready platforms, faster.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@accelio.ai?subject=Strategy%20session%20request"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-primary/25 transition hover:bg-primary-dark"
                >
                  Book a Strategy Call
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
                >
                  Explore Client Results
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-lg shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/20" />
              <div className="relative flex flex-col gap-6 p-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-muted/80">
                    AI Readiness Score
                  </p>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent">
                    82 → 94
                  </span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/80 bg-white/80 p-4 shadow-sm shadow-primary/5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Model Lifecycle
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">
                      6x
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Faster experiment-to-production deployment with unified MLOps.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-white/80 p-4 shadow-sm shadow-primary/5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Uptime
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">
                      99.9%
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Reliability achieved after platform hardening and monitoring.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-white/80 p-4 shadow-sm shadow-primary/5 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Team Enablement
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-3xl font-semibold text-slate-900">
                        120+
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Engineers & Data Scientists
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted">
                      trained through enablement sprints and operating model design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-border bg-white/60 backdrop-blur sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 border-border px-6 py-6 sm:border-r last:sm:border-r-0"
              >
                <span className="text-3xl font-semibold text-slate-900">
                  {stat.value}
                </span>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="insights"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32"
        >
          <div className="rounded-3xl border border-border bg-surface px-6 py-10 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Trusted by teams modernizing enterprise AI
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="inline-flex items-center rounded-2xl border border-border/70 bg-white px-4 py-3 text-sm font-semibold text-muted/90 shadow-sm shadow-primary/5"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Core engagements
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Precision-crafted infrastructure for AI scale
              </h2>
            </div>
            <a
              href="mailto:hello@accelio.ai?subject=Capabilities%20deck%20request"
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
            >
              Request Capabilities Deck
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-8 shadow-lg shadow-primary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                  •
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {solution.description}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-900">
                  {solution.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="capabilities"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32"
        >
          <div className="grid gap-10 rounded-3xl border border-border bg-gradient-to-br from-surface via-white to-primary/5 px-8 py-12 shadow-xl shadow-primary/10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Operating model
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                High-velocity infrastructure with compliance built in
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                From data governance to deployment automation, we architect platforms that satisfy both your innovation agenda and regulatory landscape. Our blended team combines AI strategists, platform engineers, and change leaders.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                Engagement formats include fractional leadership, delivery pods, and transformation PMOs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "AI Strategy & Portfolio Design",
                "Reference Architectures & Build",
                "MLOps & Model Governance",
                "Data Fabric & Feature Platforms",
                "Observability & Reliability Engineering",
                "Enablement & Change Management",
              ].map((capability) => (
                <div
                  key={capability}
                  className="rounded-2xl border border-border bg-white/80 p-5 text-sm font-semibold text-slate-900 shadow-sm shadow-primary/5"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Our cadence
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Collaborative acceleration from idea to impact
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {approach.map((phase, index) => (
              <div
                key={phase.title}
                className="relative rounded-3xl border border-border bg-surface p-8 shadow-lg shadow-primary/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="case-studies"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Proof in execution
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Tangible outcomes from complex ecosystems
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.headline}
                className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-white/90 p-8 shadow-lg shadow-primary/10"
              >
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {study.industry}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {study.headline}
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  {study.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
          <div className="grid gap-6 rounded-3xl border border-border bg-surface px-8 py-12 md:grid-cols-[0.65fr_0.35fr] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                What clients say
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Embedded partners that deliver end-to-end
              </h2>
            </div>
            <div className="flex items-center justify-end gap-2 text-xs text-muted">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              Representative feedback
            </div>
            <div className="md:col-span-2">
              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <figure
                    key={testimonial.name}
                    className="flex h-full flex-col justify-between rounded-3xl border border-border bg-white/80 p-6 shadow-md shadow-primary/10"
                  >
                    <blockquote className="text-sm leading-6 text-muted">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-6 text-sm font-semibold text-slate-900">
                      {testimonial.name}
                      <span className="block text-xs font-normal text-muted">
                        {testimonial.role}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="md:max-w-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Clarity before we engage
              </h2>
              <p className="mt-4 text-sm text-muted">
                Still have a question? Email{" "}
                <a
                  className="font-semibold text-primary hover:text-primary-dark"
                  href="mailto:hello@accelio.ai"
                >
                  hello@accelio.ai
                </a>{" "}
                and our team will respond within one business day.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-primary/5"
                >
                  <h3 className="text-sm font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark px-8 py-12 text-white shadow-2xl">
            <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Let&apos;s architect what&apos;s next
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                  Ready to operationalize AI with confidence?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                  We meet you where you are, embed with your teams, and deliver the infrastructure foundation that keeps AI reliable, explainable, and enterprise-grade.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@accelio.ai?subject=Accelio%20Lab%20consultation"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:bg-slate-200"
                >
                  Start a Conversation
                </a>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-accent"
                >
                  Download Engagement Overview →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Accelio Lab
            </p>
            <p className="mt-1 text-xs text-muted">
              AI Infrastructure Consulting for medium to large enterprises
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
            <a
              href="mailto:hello@accelio.ai"
              className="font-semibold text-slate-900 transition hover:text-primary"
            >
              hello@accelio.ai
            </a>
            <span>∙</span>
            <a
              href="https://www.linkedin.com/company/accelio-lab"
              className="transition hover:text-primary"
            >
              LinkedIn
            </a>
            <span>∙</span>
            <span>© {new Date().getFullYear()} Accelio Lab. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
