export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Software Engineer Portfolio</h1>
        <p className="text-xl text-gray-400 mb-8">
          Specializing in Full-Stack Development & AI Integration.
        </p>
        <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50">
          <h2 className="text-2xl font-semibold mb-2">Featured Project</h2>
          <p className="text-gray-300">Modern Dev Portfolio built with Next.js 16 and TypeScript.</p>
        </div>
      </div>
    </main>
  );
}