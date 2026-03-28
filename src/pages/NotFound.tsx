export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white flex-col">
      <h1 className="text-6xl font-heading italic mb-4">404</h1>
      <p className="text-white/60 font-body font-light">Page not found</p>
      <a href="/" className="mt-8 text-white hover:underline">Return Home</a>
    </div>
  );
}
