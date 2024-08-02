import next from "next";

const apiURL = process.env.NEXT_PUBLIC_API_URL

export const fetchDataProducts = async () => {
  const response = await fetch(apiURL + '/products', {
    cache: "no-cache",
  });
  const data = await response.json();

  return data;
};
