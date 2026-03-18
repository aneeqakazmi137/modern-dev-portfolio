export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm text-center">
        <h1 className="text-4xl font-bold mb-4">Syeda Aneeqa Ijaz Kazmi</h1>
        <p className="text-xl text-gray-400 mb-12">
          Computer Science Student @ COMSATS | Software Developer
        </p>
        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Project 1 */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">Socket-Based Chat Application</h2>
            <p className="text-gray-300 mb-4">
              A Java-based network communication system featuring a graphical user interface and multi-threaded socket programming for real-time data exchange.
            </p>
            
              href="https://github.com/aneeqakazmi137/java-network-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              View Source Code on GitHub →
            </a>
          </div>
          {/* Project 2 */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">Point of Sale (POS) System</h2>
            <p className="text-gray-300">A retail management and automated billing system developed using Java and JavaFX.</p>
          </div>
          {/* Project 3 */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">Library Management System</h2>
            <p className="text-gray-300 mb-4">
              A console-based C++ application focused on efficient data handling, OOP principles, and persistent file storage.
            </p>
            
              href="https://github.com/aneeqakazmi137/cpp-library-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors hover:underline underline-offset-4 decoration-2"
            >
              View Source Code on GitHub →
            </a>
          </div>
          {/* Project 4 */}
          <div className="border border-gray-700 p-6 rounded-lg bg-gray-900/50 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">Pro Hangman Edition</h2>
            <p className="text-gray-300 mb-4">
              A robust C++ game featuring Object-Oriented Programming and dynamic file handling for word lists.
            </p>
            
              href="https://github.com/aneeqakazmi137/cpp-hangman-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              View Source Code on GitHub →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
