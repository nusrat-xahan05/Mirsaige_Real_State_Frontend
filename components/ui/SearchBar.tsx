"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for the input value
  const [value, setValue] = useState(searchParams.get("search") || "");
  const [debouncedValue] = useDebounce(value, 500);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (debouncedValue) {
      params.set("search", debouncedValue);
    } else {
      params.delete("search");
    }

    params.delete("page");
    router.replace(`/?${params.toString()}`, { scroll: false });
  }, [debouncedValue]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search blogs..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-[#1c2136]/50 border border-white/10 text-gray-300 placeholder:text-gray-500 py-4 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 backdrop-blur-sm"
        />

        <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
      </div>
    </div>
  );
}
