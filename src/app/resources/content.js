import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jason",
  lastName: "Webster",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "EHR Integration Specialist",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  };

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jason-webster-ab3814116",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:thejasonwebster@gmail.com",
  },
];

const home = {
  display: false,
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my experience as a ${person.role}`,
  headline: <>EHR Integration Specialist</>,
  subline: (
    <>
     I'm Jason, an <InlineCode>EHR Integration Specialist</InlineCode>. I'm passionate about leveraging technology to create innovative solutions that improve lives. 
     </>
  ),
};

const about = {
  label: "",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/thejasonwebster",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      I am a healthcare IT professional with a strong background in laboratory operations
      and EHR integrations. I excel at bridging the gap between technology and healthcare operations. 
      I am skilled at navigating HL7 and XML within Epic interfaces to resolve complex issues. 
      I bring technical expertise and analytical problem-solving to drive efficiency in healthcare environments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Exact Sciences",
        timeframe: "2022 - Present",
        role: "EHR Integration Analyst",
        achievements: [
          <>
            Played a key role in validating and testing new integrations, contributing to the successful deployment of multiple system upgrades while maintaining compliance with patient privacy and security standards.
          </>,
          <>
            Successfully onboarded and integrated healthcare partners into the AURA network, streamlining result delivery and improving patient care coordination while ensuring HIPAA compliance and data security.
          </>,
        ],
        images: []
      },
      {
        company: "Emory University",
        timeframe: "2022 - Present",
        role: "Histotechnologist PRN - Part-Time",
        achievements: [
          <>
            Successfully prepared and processed high-quality tissue samples for diagnostic and research purposes, ensuring accuracy and adherence to strict laboratory protocols.
          </>,
          <>
            Collaborated with pathologists and laboratory teams to prioritize workloads, maintain efficient workflows, and deliver timely results, supporting critical patient care decisions.
          </>,
        ],
        images: []
      },
      {
        company: "U.S. Department of Veterans Affairs",
        timeframe: "2019 - 2022",
        role: "Histotechnologist",
        achievements: [
          <>
            Processed and prepared tissue specimens for microscopic examination, ensuring high-quality 
            slides for accurate pathological diagnosis.
          </>,       
          <>
            Implemented and followed strict safety protocols while handling biological specimens and 
            hazardous materials in accordance with federal regulations.
          </>
        ],
        images: []
      },
      {
        company: "Bako Diagnostics",
        timeframe: "2017 - 2019",
        role: "Laboratory Assistant",
        achievements: [
          <>
            Managed specimen collection, processing, and documentation while maintaining strict adherence to CLIA and CAP regulations, ensuring accurate patient sample handling and tracking.
          </>,
          <>
            Utilized and maintained proficiency in EHR systems (VistaCPRS, Assist) for accurate patient data management and specimen tracking.
          </>,
          <>
            Contributed to quality assurance by monitoring processes, calibrating equipment, and maintaining detailed SOPs and Chain of Custody documentation.
          </>
        ],
        images: []
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies & Certs",
    institutions: [
      {
        name: "Harrisburg University of Science and Technology",
        description: <>Master of Science - MS, Healthcare Informatics</>,
      },
      {
        name: "Valdosta State University",
        description: <>Bachelor's Degree, Biology</>,
      },
      {
        name: "Epic",
        description: <>Bridges Certification</>,
      },
      {
        name: "Rhapsody",
        description: <>Level 1: Corepoint Integration Engine</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Healthcare Integration Technologies",
        description: <>Expertise in HL7 interfaces, Epic Bridges integration engine, and Corepoint Integration Engine for seamless healthcare data exchange and system interoperability.</>,
        images: [{}],
      },
      {
        title: "Healthcare Analytics",
        description: <>Proficient in Tableau for healthcare data visualization and analytics, combined with strong medical terminology knowledge for accurate data interpretation and reporting.</>,
        images: [{}],
      },
      {
        title: "Healthcare Systems & Tools",
        description: <>Experienced with Epic Bridges, Beaker, and Vista CPRS. Proficient in laboratory report printing, data collection, and system migration.</>,
        images: [{}],
      },
      {
        title: "Project & Documentation Tools",
        description: <>Skilled in Microsoft Suite, Jira, and Confluence for project planning, coordination, and documentation. Strong focus on customer support and stakeholder communication.</>,
        images: [{}],
      }
    ]
  },
};

const blog = {
  label: "Blog",
  title: "Blog Posts",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Personal Projects",
  title: "My projects",
  description: `Side projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/Screenshot 2024-12-13 183324.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183310.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/InspireB_Roll.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183251.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00077_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183242.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Gen-3+Alpha+Turbo+3425129327,+Cropped+-+MarkuryFLU.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00007_.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ComfyUI_00090_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00008_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00173_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Gen-3+Alpha+2434284061,+Cropped+-+ComfyUI_00.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183258.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00021.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
