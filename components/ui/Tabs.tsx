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

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-20 mb-14">
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
