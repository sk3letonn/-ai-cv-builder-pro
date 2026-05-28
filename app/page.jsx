
'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cv, setCv] = useState('');

  const [form, setForm] = useState({
    name: '',
    country: '',
    job: '',
    experience: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const generateCV = async () => {
    setLoading(true);

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setCv(data.cv);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          AI CV Builder Pro
        </h1>

        <p className="mb-8 text-gray-400">
          Generate professional resumes for any country and any job using AI.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <div className="space-y-4">
              <input
                className="w-full p-3 rounded bg-zinc-800"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
              />

              <input
                className="w-full p-3 rounded bg-zinc-800"
                placeholder="Country"
                name="country"
                onChange={handleChange}
              />

              <input
                className="w-full p-3 rounded bg-zinc-800"
                placeholder="Target Job"
                name="job"
                onChange={handleChange}
              />

              <textarea
                className="w-full p-3 rounded bg-zinc-800"
                rows="8"
                placeholder="Your Experience"
                name="experience"
                onChange={handleChange}
              />

              <button
                onClick={generateCV}
                className="bg-white text-black px-6 py-3 rounded-xl w-full font-bold"
              >
                {loading ? 'Generating...' : 'Generate AI CV'}
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl overflow-auto">
            <h2 className="text-2xl font-bold mb-4">
              Generated Resume
            </h2>

            <pre className="whitespace-pre-wrap text-sm">
              {cv || 'Your AI-generated resume appears here.'}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
