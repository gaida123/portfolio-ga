import type { IconType } from "react-icons";
import {
  SiElectron,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiLaravel,
  SiExpo,
  SiVite,
  SiPostman,
  SiNotion,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface Row {
  Icon: IconType;
  name: string;
  desc: string;
  iconClass?: string;
}

interface Col {
  title: string;
  rows: Row[];
}

const columns: Col[] = [
  {
    title: "Frontend",
    rows: [
      {
        Icon: SiReact,
        name: "React",
        desc: "Used in PolterGuide, Lockout, and this portfolio .",
        iconClass: "text-[#61DAFB]",
      },
      {
        Icon: SiVite,
        name: "Vite",
        desc: "Used in PolterGuide, Lockout and this portfolio.",
        iconClass: "text-[#646CFF]",
      },
      {
        Icon: SiExpo,
        name: "Expo",
        desc: "Used in Lockout for mobile-app display.",
        iconClass: "text-[#000020]",
      },
      {
        Icon: SiTailwindcss,
        name: "Tailwind CSS",
        desc: "Used in PolterGuide and this portfolio.",
        iconClass: "text-[#06B6D4]",
      },
      {
        Icon: SiTypescript,
        name: "TypeScript",
        desc: "Used in PolterGuide, Lockout, and this portfolio.",
        iconClass: "text-[#3178C6]",
      },
      {
        Icon: SiElectron,
        name: "Electron",
        desc: "Used in PolterGuide desktop overlay architecture.",
        iconClass: "text-[#47848F]",
      },
    ],
  },
  {
    title: "Backend",
    rows: [
      {
        Icon: SiFirebase,
        name: "Firebase",
        desc: "Used in Lockout and PolterGuide for state/data services.",
        iconClass: "text-[#FFCA28]",
      },
      {
        Icon: SiNodedotjs,
        name: "Node.js",
        desc: "Used in SarongWholesale for backend APIs.",
        iconClass: "text-[#5FA04E]",
      },
      {
        Icon: SiFastapi,
        name: "FastAPI",
        desc: "Used in PolterGuide for realtime backend APIs and streams.",
        iconClass: "text-[#009688]",
      },
      {
        Icon: SiLaravel,
        name: "Laravel",
        desc: "Used in Bsystem and business web platforms.",
        iconClass: "text-[#FF2D20]",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    rows: [
      {
        Icon: SiGit,
        name: "Git",
        desc: "Used in every project for version control.",
        iconClass: "text-[#F05032]",
      },
      {
        Icon: SiGithub,
        name: "GitHub",
        desc: "Used for repos and collaboration across all projects.",
        iconClass: "text-[#181717]",
      },
      {
        Icon: SiPostman,
        name: "Postman",
        desc: "Used for tracking backend APIs.",
        iconClass: "text-[#FF6C37]",
      },
      // {
      //   Icon: SiDocker,
      //   name: "Docker",
      //   desc: "Used for isolated runtime/testing in selected project workflows.",
      //   iconClass: "text-[#2496ED]",
      // },
      {
        Icon: SiVercel,
        name: "Vercel",
        desc: "Used to deploy portfolio and frontend experiences.",
        iconClass: "text-[#000000]",
      },
    ],
  },
  {
    title: "Design & Workflow",
    rows: [
      {
        Icon: SiFigma,
        name: "Figma",
        desc: "Used for UI planning before implementation.",
        iconClass: "text-[#F24E1E]",
      },
      {
        Icon: SiNotion,
        name: "Notion",
        desc: "Used for project planning, notes, and task organization.",
        iconClass: "text-black",
      },
    ],
  },
];

function StackColumn({ title, rows }: Col) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium text-muted">{title}</h3>
      <ul className="divide-y divide-[#eeeeee] border-t border-[#eeeeee]">
        {rows.map(({ Icon, name, desc, iconClass }) => (
          <li key={name} className="flex gap-3 py-3.5 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-white shadow-sm sm:h-11 sm:w-11">
              <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${iconClass ?? "text-ink"}`} aria-hidden />
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="text-[15px] font-semibold text-ink">{name}</p>
              <p className="mt-0.5 text-sm leading-snug text-muted">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhatIUse() {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="space-y-10">
          <StackColumn {...columns[0]} />
          <StackColumn {...columns[2]} />
        </div>
        <div className="space-y-10">
          <StackColumn {...columns[1]} />
          <StackColumn {...columns[3]} />
        </div>
      </div>

      <div className="mt-10 border-t border-[#eeeeee] pt-6">
        <h3 className="mb-2 text-sm font-medium text-muted">Languages</h3>
        <p className="text-sm leading-relaxed text-ink">
          TypeScript, JavaScript, Python, HTML / CSS, SQL, PHP, R
        </p>
      </div>
    </div>
  );
}
