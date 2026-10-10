import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LaunchIcon from "@mui/icons-material/Launch";
import TerminalIcon from "@mui/icons-material/Terminal";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/CODE-BY-HASSAN",
    icon: <GitHubIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/code-by-hassan",
    icon: <LinkedInIcon />,
  },
  {
    name: "Email",
    href: "mailto:hassanrizwan1713@gmail.com",
    icon: <EmailIcon />,
  },
];

const skills = [
  ["HTML5", "🌐"],
  ["CSS3", "🎨"],
  ["JavaScript", "🟨"],
  ["React.js", "⚛️"],
  ["Tailwind CSS", "💨"],
  ["Material UI", "🔷"],
  ["Bootstrap", "🅱️"],
  ["Redux", "🟣"],
  ["Firebase", "🔥"],
  ["Git", "🔶"],
  ["GitHub", "🐙"],
  ["Responsive UI", "📱"],
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Building modern, interactive interfaces with React and JavaScript.",
    icon: <CodeIcon />,
  },
  {
    title: "Responsive UI",
    description:
      "Creating layouts that adapt to mobile, tablet, and desktop screens.",
    icon: <DevicesIcon />,
  },
  {
    title: "Firebase Integration",
    description:
      "Connecting applications with Firebase Authentication and Firestore.",
    icon: <StorageIcon />,
  },
];

const projects = [
  {
    number: "01",
    title: "React Firebase Authentication",
    description:
      "Authentication application with Firebase Auth, protected routes, and Firestore integration.",
    tags: ["React", "Firebase", "Material UI"],
    demo: "https://react-firebase-silk.vercel.app",
    icon: <VerifiedIcon />,
  },
  {
    number: "02",
    title: "Student ID Card Generator",
    description:
      "A student ID card generator with form inputs and CNIC validation.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://student-id-generator.netlify.app",
    icon: <PersonIcon />,
  },
  {
    number: "03",
    title: "Todo Application",
    description:
      "A task management interface for organizing everyday tasks.",
    tags: ["React", "JavaScript", "Tailwind"],
    demo: "https://t-o-d-o-a-p-p-l-i-c-a-t-i-o-n.netlify.app",
    icon: <TerminalIcon />,
  },
  {
    number: "04",
    title: "Random Password Generator",
    description:
      "A JavaScript utility for generating random passwords.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://random-password-by-using-js.netlify.app",
    icon: <CodeIcon />,
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="portfolio relative min-h-screen overflow-hidden bg-[#020617] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes neonPulse {
          0%, 100% { box-shadow: 0 0 25px rgba(34,211,238,.25), 0 0 70px rgba(37,99,235,.12); }
          50% { box-shadow: 0 0 45px rgba(34,211,238,.55), 0 0 100px rgba(37,99,235,.25); }
        }
        @keyframes spinSlow {
          to { transform: rotate(360deg); }
        }
        @keyframes entrance {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .float-card { animation: float 4.5s ease-in-out infinite; }
        .neon-frame { animation: neonPulse 3s ease-in-out infinite; }
        .spin-ring { animation: spinSlow 24s linear infinite; }
        .enter { animation: entrance .8s ease-out both; }
        .portfolio { scroll-behavior: smooth; }
        .portfolio section { scroll-margin-top: 90px; }
        @media (prefers-reduced-motion: reduce) {
          .portfolio *, .portfolio *::before, .portfolio *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[35rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <header className="sticky top-0 z-50 border-b border-cyan-400/15 bg-[#020617]/85 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <CodeIcon fontSize="large" />
            </span>
            <span>
              <span className="block text-xl font-black">
                Hassan<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] tracking-[.2em] text-slate-400">
                FRONTEND DEVELOPER
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`text-sm transition hover:text-cyan-300 ${
                  index === 0 ? "text-cyan-300" : "text-slate-300"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-cyan-400 px-5 py-2.5 text-sm font-semibold transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Let's Talk ↗
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-700 p-2 text-cyan-300 md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-[#06152f] p-4 md:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:min-h-[620px] md:grid-cols-2 md:px-8 md:py-20"
      >
        <div className="enter relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[.07] px-4 py-2 text-xs text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Welcome to my portfolio
          </div>

          <p className="text-2xl font-semibold text-slate-200 md:text-3xl">
            Hello, I'm
          </p>
          <h1 className="mt-1 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hassan
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Rizwan
            </span>
          </h1>

          <h2 className="mt-5 text-lg font-semibold text-slate-300 md:text-xl">
            Frontend Developer{" "}
            <span className="text-cyan-300">& React Developer</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            I build modern web interfaces with React, JavaScript and Tailwind
            CSS. I enjoy turning ideas into interactive digital experiences
            and integrating applications with Firebase.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-400/40"
            >
              <CodeIcon />
              Explore Projects
              <ArrowOutwardIcon />
            </a>
            <a
              href="https://github.com/CODE-BY-HASSAN"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>

          <div className="mt-7 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-900/70 text-cyan-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-16">
          <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px] sm:h-96 sm:w-96" />

          <div className="spin-ring absolute h-[330px] w-[330px] rounded-full border border-dashed border-cyan-400/30 sm:h-[430px] sm:w-[430px]" />

          <div className="absolute h-[320px] w-[300px] rotate-[-12deg] rounded-[45px] border border-blue-500/70 bg-blue-500/[.04] shadow-[0_0_45px_rgba(37,99,235,0.2)] transition-transform duration-700 hover:rotate-0 sm:h-[410px] sm:w-[370px]" />

          <div className="absolute h-[310px] w-[290px] rotate-[9deg] rounded-[42px] border-2 border-cyan-400/80 shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-transform duration-700 hover:rotate-0 sm:h-[400px] sm:w-[360px]" />

          <div className="neon-frame group relative z-10 h-[300px] w-[260px] overflow-hidden rounded-full border-[5px] border-cyan-300 bg-slate-900 sm:h-[390px] sm:w-[330px]">
            <img
              src="https://res.cloudinary.com/hd4samzq/image/upload/v1791603451/WhatsApp_Image_2026-09-28_at_7.48.19_AM.jpg"
              alt="Developer portrait"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-xl font-black text-white">Hassan Rizwan</p>
              <p className="mt-1 text-sm font-medium text-cyan-300">
                Frontend Developer
              </p>
            </div>
          </div>

          <div className="float-card absolute left-0 top-10 z-20 rounded-2xl border border-cyan-400/50 bg-[#06152f]/95 p-3 shadow-xl backdrop-blur-xl sm:-left-3 sm:p-4">
            <div className="flex items-center gap-3">
              <CodeIcon className="text-cyan-300" />
              <div>
                <p className="text-xs font-bold">Clean Code</p>
                <p className="text-[10px] text-slate-400">Better UI</p>
              </div>
            </div>
          </div>

          <div className="float-card absolute right-0 top-[42%] z-20 rounded-2xl border border-blue-400/50 bg-[#06152f]/95 p-3 shadow-xl backdrop-blur-xl sm:-right-3 sm:p-4" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-3">
              <AutoAwesomeIcon className="text-cyan-300" />
              <div>
                <p className="text-xs font-bold">React + Firebase</p>
                <p className="text-[10px] text-slate-400">Modern Web Apps</p>
              </div>
            </div>
          </div>

          <div className="float-card absolute bottom-8 left-0 z-20 rounded-2xl border border-cyan-400/50 bg-[#06152f]/95 p-3 shadow-xl backdrop-blur-xl sm:-left-4 sm:p-4" style={{ animationDelay: "2s" }}>
            <div className="flex items-center gap-3">
              <VerifiedIcon className="text-emerald-300" />
              <div>
                <p className="text-xs font-bold">Real Projects</p>
                <p className="text-[10px] text-slate-400">Real Skills</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="hidden items-center justify-center gap-1 text-xs text-slate-400 transition hover:text-cyan-300 md:flex"
        >
          Scroll Down <KeyboardArrowDownIcon className="animate-bounce" />
        </a>
      </section>

      <section id="about" className="border-y border-slate-800/80 bg-[#06101f]/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[.85fr_1.4fr] md:px-8">
          <div>
            <p className="mb-2 text-sm font-semibold text-cyan-300">
              Get to know me
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              About <span className="text-cyan-300">Me</span>
            </h2>

            <div className="mt-8 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <PersonIcon fontSize="large" />
              </div>
              <div>
                <h3 className="font-bold">My Development Journey</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  I'm a frontend developer focused on building web applications
                  using modern JavaScript tools. I work with React to create
                  reusable components and use Tailwind CSS and Material UI to
                  build polished interfaces.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  I'm also learning to connect frontend applications with
                  Firebase services, manage authentication, and organize
                  application data. My goal is to keep improving by building
                  practical projects.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">
              My <span className="text-cyan-300">Services</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-800 bg-[#06152a]/80 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-cyan-400/[.04]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h4 className="font-bold">{service.title}</h4>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/[.08] to-blue-500/[.08] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <AutoAwesomeIcon fontSize="large" />
              </div>
              <div>
                <h4 className="font-bold">My Current Focus</h4>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  React development, Firebase integration, state management,
                  responsive design, and maintainable code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <p className="mb-2 text-sm font-semibold text-cyan-300">
          Technologies I use
        </p>
        <h2 className="text-3xl font-black">
          Skills <span className="text-cyan-300">& Tools</span>
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
          Technologies I'm using and learning to build modern web applications.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map(([name, icon]) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#07172b] px-3 py-4 text-xs font-semibold transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[.06]"
            >
              <span className="text-lg">{icon}</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-cyan-300">
              What I've built
            </p>
            <h2 className="text-3xl font-black">
              Featured <span className="text-cyan-300">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/CODE-BY-HASSAN"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-cyan-300 transition hover:text-white"
          >
            View GitHub <ArrowOutwardIcon fontSize="small" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-gradient-to-br from-[#07172b] to-[#020617] p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                  {project.icon}
                </div>
                <span className="text-xs text-slate-500">{project.number}</span>
              </div>
              <h3 className="font-bold">{project.title}</h3>
              <p className="mt-3 flex-1 text-xs leading-6 text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 px-2.5 py-1 text-[10px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-3 py-2.5 text-xs font-bold text-slate-950 transition hover:brightness-110"
                >
                  Live Demo <LaunchIcon fontSize="small" />
                </a>
                <a
                  href="https://github.com/CODE-BY-HASSAN"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub for ${project.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  <GitHubIcon fontSize="small" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 pb-12 md:px-8">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-[#071a37] via-[#06243b] to-[#11113b] px-7 py-10 md:flex-row md:items-center md:px-12">
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative">
            <p className="mb-2 text-sm font-semibold text-cyan-300">
              Let's connect
            </p>
            <h2 className="text-2xl font-black md:text-3xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
              I'm interested in learning, collaborating, and building useful web
              experiences. Feel free to reach out to discuss a project or
              opportunity.
            </p>
          </div>
          <a
            href="mailto:hassanrizwan1713@gmail.com"
            className="relative inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30"
          >
            <EmailIcon />
            Contact Me
            <ArrowOutwardIcon />
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-center sm:flex-row sm:text-left md:px-8">
          <a href="#home" className="text-lg font-black">
            Hassan<span className="text-cyan-300">.</span>
            <span className="ml-3 text-xs font-normal text-slate-500">
              Frontend Developer
            </span>
          </a>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Hassan Rizwan. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-xs text-slate-400 transition hover:text-cyan-300"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
