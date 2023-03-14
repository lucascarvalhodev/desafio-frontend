const LSKEY = "SEARCH_HISTORY";

export function addSearchHistory(search: string) {
  const searchHistory = getSearchHistory();
  searchHistory.push(search);
  localStorage.setItem(LSKEY, JSON.stringify(searchHistory));
}

export function getSearchHistory(): string[] {
  const searchHistory = localStorage.getItem(LSKEY);
  if (!searchHistory) return [];
  return JSON.parse(searchHistory);
}

export function clearSearchHistory() {
  localStorage.removeItem(LSKEY);
}
