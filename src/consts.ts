import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Gianluca Carlini",
  DESCRIPTION: "Bienvenido a mi portfolio!.",
  AUTHOR: "Gianluca Carlini",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Posts written",
};

// Studies Page
export const STUDIES: Page = {
  TITLE: "Studies",
  DESCRIPTION: "Places I am studying",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Studies",
    HREF: "/studies",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "carlinigianluca@outlook.com",
    HREF: "mailto:carlinigianluca@outlook.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Gianluca Carlini",
    HREF: "https://github.com/Gian1337",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Gianluca Carlini",
    HREF: "https://www.linkedin.com/in/gianluca-carlini/",
  },
];
