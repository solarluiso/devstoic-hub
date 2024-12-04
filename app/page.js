// page.js

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-mono text-violet-500">
        Welcome to DevStoic Hub
      </h1>
      <p className="mt-4 text-slate-500 text-xl">
        A place for developers to cultivate productive habits.
      </p>
      <button className="mt-6 px-6 py-3 bg-violet-500 text-white rounded-md shadow-lg hover:bg-violet-600">
        Start Now
      </button>
    </div>
  );
}
