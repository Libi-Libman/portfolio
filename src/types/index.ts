export interface Project {
  id: number;
  title: string;
  description: string;
  liveDemoUrl: string;
  repositoryUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}