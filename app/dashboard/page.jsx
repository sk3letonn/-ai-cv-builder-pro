
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">My Resumes</h2>
          <p className="text-gray-400 mt-2">
            Saved AI-generated resumes.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">ATS Score</h2>
          <p className="text-gray-400 mt-2">
            Analyze your resume score.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Cover Letters</h2>
          <p className="text-gray-400 mt-2">
            Generate AI cover letters.
          </p>
        </div>
      </div>
    </main>
  );
}
