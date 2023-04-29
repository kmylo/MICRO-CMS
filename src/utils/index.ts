import { locales, options } from "./constants";

export const filterMatch = (arr, value) =>
  arr
    .filter((item) => {
      const searchTerm = value.toLowerCase().trim();
      const fullName = item.full_name.toLowerCase();

      return (
        searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
      );
    })
    .slice(0, 10);

type FilterByFieldsProps<T> = {
  query: string;
  arrayData: T[] | undefined;
  fields: Array<keyof T>;
};

export const filterByFieldsTs = <T extends Record<string, any>>({
  query,
  arrayData,
  fields
}: FilterByFieldsProps<T>) =>
  arrayData?.filter((item) =>
    fields?.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  );

// // export const filterByFields = (query, arrayData, fields) => {
// //   if (query.length < 1) return [];
// //   return arrayData?.filter((item) =>
// //     fields?.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
// //   );
// // };

export const filterByFields = (query, arrayData, fields) => {
  // if (query.length < 1) return [];
  const searchTerm = query.toLowerCase().trim();
  return arrayData?.filter((item) =>
    fields?.some(
      (key) =>
        searchTerm &&
        item[key].toLowerCase().includes(query.toLowerCase()) &&
        item[key].toLowerCase() !== searchTerm
    )
  );
};

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\_\_+/g, "-") // Replace multiple - with single -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function randomDate(
  start: Date = new Date("2000-01-01"),
  end: Date = new Date()
): Date {
  const timeRange = end.getTime() - start.getTime();
  const randomTime = Math.floor(Math.random() * timeRange);
  return new Date(start.getTime() + randomTime);
}

export const fullToLocaleDateString = (date: Date = new Date()) =>
  new Date(date).toLocaleDateString(locales, options);

export const randomDatetoLocaleString = () =>
  fullToLocaleDateString(randomDate());

export const randomId = () =>
  Math.floor(Math.random() * Date.now()).toString(16);
