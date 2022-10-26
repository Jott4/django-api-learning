export interface PostProps {
  id: number;
  description: string;
  created_at: string;
  image: string;
  user: {
    id: number;
    username: string;
    profile_pic: string;
  };
  image_filter: string;
}

export interface PostResponse {
  count: number;
  next: any;
  previous: any;
  results: PostProps[];
}
