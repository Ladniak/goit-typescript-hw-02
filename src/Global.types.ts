type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};

type User = {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  profile_image?: {
    small: string;
    medium: string;
    large: string;
  };
};

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: number;
  likes: number;
  alt_description: string;
  urls: Urls;
}
