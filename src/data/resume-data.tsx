import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Phan Dang",
  initials: "PD",
  location: "Irvine, CA",
  locationLink: "https://www.google.com/maps/place/Irvine,+CA/",
  about:
    "Director of Software Engineering @ US Data Networks.",
  summary:
    "I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Django and Postgres. I have over 5 years of experience working at successful startups as well as big enterprise companies.",
  avatarUrl: "/avatartion.png",
  personalWebsiteUrl: "https://pdang.vercel.app/",
  contact: {
    email: "philip.ddang@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pddang",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/phanddang/",
        icon: LinkedInIcon,
      },

    ],
  },
  education: [
    {
      school: "National University",
      degree: "Master's Degree in Computer Science",
      start: "2018",
      end: "2020",
    },
    {
      school: "UC Davis",
      degree: "Bachelor's Degree in Chemical Engineering",
      start: "2014",
      end: "2016",
    },
  ],
  work: [
    {
      company: "US Data Networks",
      link: "https://usdatanetworks.com",
      badges: ["Remote"],
      title: "Director of Software Engineering",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Building the next generation SD-WAN(Software-Defined Wide Area Network) to empower and connect millions of consumers and businesses accross the globe. Technologies: TypeScript, React, Django, Postgres, Docker, AWS, Azure, SaltStack, Terraform, Linux.",
    },
    {
      company: "Innophase Inc.",
      link: "https://innophaseinc.com",
      badges: ["San Diego, CA"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Managed and maintained the company's IT infrastructure. Built and maintained the company's website. Built and maintained the company's internal tools. Technologies: TypeScript, React, Django, Postgres, Docker, Linux.",
    },
    {
      company: "Popcharge",
      link: "http://pop-charge.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2020",
      description:
        "Built mobile application with custom back-end API and integrated the existing system with Google Map SDK and Stripe/Apple Pay",
    },
    {
      company: "Upwork",
      link: "https://www.upwork.com",
      badges: [],
      title: "Software Engineer-Contractor",
      logo: NSNLogo,
      start: "2018",
      end: "2020",
      description: "Worked on various projects as a contractor",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Django",
    "Postgres",
    "Docker",
    "AWS",
    "Azure",
    "SaltStack",
    "Terraform",
    "Bashscript",
    "FRRouting",
    "BPG",
    "SD-WAN",
    "ECS",

  ],
  projects: [
    {
      title: "myRealtors",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Django",
        "Docker",
      ],
      description: "A Real Estate App that manages listings, inquiries, contacts, dashboards and more.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Covid-19-tracker",
      techStack: ["Side Project", "TypeScript", "RapidAPI"],
      description:
        "A Covid-19 tracker that displays the latest data and statistics about the Coronavirus pandemic",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Personal Website",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://pdang.vercel.app/",
      },
    },
    {
      title: "Adopt-Me",
      techStack: ["Side Project", "React", "Parcel"],
      description:
        "A React application that displays a list of adoptable pets",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Finstate",
      techStack: ["Side Project", "PHP", "Laravel"],
      description:
        "A web application that displays the latest stock market data and statistics",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },

  ],
} as const;
