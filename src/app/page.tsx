export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Syeda Aneeqa Ijaz Kazmi</h1>
        <p className="text-xl text-gray-400 mb-8">
          Computer Science Student @ COMSATS | Software Developer
        </p>

        <div className="grid grid-cols-1 gap-6">
          {/* Project 1 */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50">
            <h2 className="text-2xl font-semibold mb-2">Socket-Based Chat Application</h2>
            <p className="text-gray-300">A real-time client-server communication system built with Java Socket Programming.</p>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50">
            <h2 className="text-2xl font-semibold mb-2">Point of Sale (POS) System</h2>
            <p className="text-gray-300">A retail management and automated billing system developed using Java and JavaFX.</p>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50">
            <h2 className="text-2xl font-semibold mb-2">Library Management System</h2>
            <p className="text-gray-300">A console-based C++ application focused on efficient data handling and OOP principles.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
