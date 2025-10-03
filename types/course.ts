export type Course ={
  id: number;
  title: string;
  description?: string;
  fullDescription?: string;
  icon: string;
  image: string;
  tags: string[];
  duration: string;
  keyTopics?: string[];
  courseStructure?: string[];
  benefits?: string[];
  careerOpportunities?: string[];
}