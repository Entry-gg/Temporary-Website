export default function ComingSoon() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-[#060606] text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,80,0.08)_0%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <h1 className="z-10 text-5xl font-bold sm:text-6xl mb-4 animate-fade-in">Under Construction</h1>
      <p className="z-10 text-lg text-gray-300 max-w-lg px-4 animate-fade-in delay-300">
        <span className="text-white font-medium">Entry.gg</span> is currently under construction and is set to release in{" "}
        <span className="text-white font-medium">January, 2026</span>.
        <br />
        You can join our{" "}
        <a href="/discord" className="text-entry hover:text-entry-hover underline transition"> Discord community</a>{" "}
        for more updates.
      </p>

      <p className="absolute bottom-4 text-xs text-gray-500">
        © 2025 Entry.gg | All rights reserved.
      </p>
    </main>
  )
}