type Url = {
  small: string;
  full: string;
};

export interface Image {
  id: number;
  likes: number;
  alt_description: string;
  urls: Url;
}
