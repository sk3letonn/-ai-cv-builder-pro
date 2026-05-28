
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  const body = await req.json();

  const prompt = `
  Create a professional ATS-optimized CV.

  Name: ${body.name}
  Country: ${body.country}
  Job: ${body.job}
  Experience: ${body.experience}

  Rules:
  - Professional tone
  - Country localized
  - ATS optimized
  - Strong action verbs
  - Modern structure
  - Include summary and skills
  `;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  });

  return Response.json({
    cv: response.choices[0].message.content
  });
}
