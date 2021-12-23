export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  permissions: string[];
  avatar: string;
  active: boolean;
  created_at: string;
}

export interface Category {
  id: string;
  title: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  image_description: string;
  video_url: string | null;
  video_description: string | null;
  created_at: string;
  user: User[];
  categories: Category[];
}
