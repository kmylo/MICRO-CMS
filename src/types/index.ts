export enum PostKeys {
  POST_ID = "id",
  TITLE = "title",
  AUTHOR = "author",
  CONTENT = "content",
  SLUG = "slug",
  CREATED_AT = "createdAt",  
}

const { POST_ID, TITLE, AUTHOR, CONTENT, SLUG, CREATED_AT } = PostKeys;

export interface IPost {
  [POST_ID]: string;
  [TITLE]: string;
  [AUTHOR]?: string;
  // [CONTENT]: string | React.ReactNode;
  [CONTENT]: string;
  [SLUG]?: string;
  [CREATED_AT]: Date;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export interface MenuItem {
  name: string;
  path: string;
}

export interface BlogData {
  logo: string;
  menuItems: MenuItem[];
  heroImage: string;
  contactInfo: ContactInfo;
  posts: IPost[];
}

export interface AppRoute {
  element: JSX.Element;
  path?: string;
  title?: string;
  index?: boolean;
  children?: AppRoute[];
}

export interface IFormConfig {
  type: string;
  label: string;
  field: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  defaultValue?: string;
}
