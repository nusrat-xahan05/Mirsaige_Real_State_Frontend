"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 justify-center mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2.5 rounded-lg text-brand-bg ${
            currentPage === page ? "bg-highlighted" : "bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
