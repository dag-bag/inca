/** @format */

export const SearchQuery = async (query: string) => {
  if (!query) return new Error(`Enter Search query`);
  const resp = await fetch(`http://localhost:3000/api/query?title=${query}`);
  const products = await resp.json();
  return products;
};
