export const locales: Intl.LocalesArgument = "es-AR";
export const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export const TODAY_DATE = new Date().toLocaleDateString(locales, options);

export const basePostRoute = "/blog/post/";

export const bgHeroImg = "https://i.ytimg.com/vi/qdwKLY45sh4/maxresdefault.jpg";