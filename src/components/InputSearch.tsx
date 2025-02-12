import { BsSearch } from "react-icons/bs";

interface InputSearchProps {
  value?: string;
  setValue: (value: string) => void;
  onSearch?: () => void;
}

export function InputSearch({ value, setValue, onSearch }: InputSearchProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onSearch && onSearch();
    }
  }

  function handleSetValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="flex-1 max-w-xl flex flex-center">
      <input
        value={value}
        onChange={handleSetValue}
        className="flex-1 h-10 rounded-tl-full rounded-bl-full bg-transparent border-neutral-700 border-[1px] outline-none pl-4 pr-1"
        onKeyDown={handleKeyDown}
      />
      <button
        className="w-14 h-10 bg-neutral-700 rounded-tr-full rounded-br-full flex justify-center items-center pr-1"
        onClick={onSearch}
      >
        <BsSearch />
      </button>
    </div>
  );
}
