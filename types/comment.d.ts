/** @format */
interface CommentUser {
  name: string;
  image: string;
  _id: string;
}
export interface IComment {
  _id: string;
  text: string;
  user: CommentUser;
  createdAtPost: string;
  blog: string;
  date: Date;
}
