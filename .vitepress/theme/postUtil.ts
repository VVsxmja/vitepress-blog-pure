export interface PostDate {
  time: number;
  string: string;
}

export interface TimestampInfo {
  [src: string]: {
    created: Date | null;
    updated: Date | null;
  };
}

export interface Post {
  title: string;
  url: string;
  date: Date | null;
  src: string; // this is different from the "src" in ContentData
  lastUpdated: Date | null;
  excerpt: string;
}

export function formatDate(date: Date | null, loacles: string = "en-US"): PostDate | null {
  // if (!(date instanceof Date)) {
  //   console.error(date, typeof date)
  //   return null;
  // }
  if (date === null) {
    return null;
  }
  date = new Date(date);
  if (isNaN(date.getTime())) {
    return null;
  }
  date.setUTCHours(12); // FIXME
  return {
    time: date.getTime(),
    string: date.toLocaleDateString(loacles, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  } satisfies PostDate;
}