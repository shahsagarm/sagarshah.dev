export type TechDetails = {
  logo: string;
  darkModeLogo?: string;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string;
  darkModeLogo?: string;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};
