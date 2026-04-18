export default function Loader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="border p-4 rounded animate-pulse">
          <div className="h-40 bg-gray-300 mb-4"></div>
          <div className="h-4 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 w-2/3"></div>
        </div>
      ))}
    </div>
  );
}
