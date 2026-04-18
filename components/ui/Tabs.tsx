"use client";
import { tabs } from "@/types/post.interface";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || "all";

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (tab === "all") {
      params.delete("tab");
    } else {
      params.set("tab", tab);
    }
    params.delete("page");
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-fit flex justify-center items-center gap-2 border p-1.5 rounded-full border-highlighted/50">
      {tabs.map((tab) => {
        const isActive = currentTab === tab;

        return (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`relative px-6 py-2 text-base text-white font-medium transition-all duration-300 capitalize cursor-pointer ${isActive ? "bg-highlighted rounded-full" : "hover:text-highlighted"}`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
