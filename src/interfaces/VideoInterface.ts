export interface VideoInterface {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  channel: {
    id: string;
    title: string;
  };
}
