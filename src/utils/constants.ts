import { IFormConfig, PostKeys } from "../types";

export const locales: Intl.LocalesArgument = "en-US";
export const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export const TODAY_DATE = new Date().toLocaleDateString(locales, options);

export const basePostRoute = "/blog/post/";

export const bgHeroImg = "https://i.ytimg.com/vi/qdwKLY45sh4/maxresdefault.jpg";

export const postFormConfig: IFormConfig[] = [
  {
    type: "text",
    label: "title",
    field: "title",
    placeholder: "Enter title",
    minLength: 2,
    required: true
  },
  {
    type: "text",
    label: "author",
    field: "author",
    placeholder: "Author",
    minLength: 2
  }
];

export const dataKey = PostKeys.TITLE;
export const postFilterFields = [dataKey];
export const btnSearchTxt = "Search";
export const postKeyNav = "title";