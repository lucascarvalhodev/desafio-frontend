import { Button } from "../components/Button";
import { clearSearchHistory, getSearchHistory } from "../helpers/searchHistory";
import { useState, useEffect } from "react";

export function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(getData, []);

  function getData() {
    setSearchHistory(getSearchHistory());
  }

  function handleClearSearchHistory() {
    clearSearchHistory();
    getData();
  }

  return (
    <div className="flex flex-col mt-4 items-center">
      <div className="text-lg font-bold mb-1">Histórico de busca</div>
      {searchHistory?.reverse().map((sh) => (
        <div>{sh}</div>
      ))}
      {searchHistory.length === 0 && "Sem registro"}
      <div className="mt-8">
        <Button onClick={handleClearSearchHistory}>Limpar histórico</Button>
      </div>
    </div>
  );
}
