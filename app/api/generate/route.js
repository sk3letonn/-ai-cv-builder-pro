export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'user',
              content: `
Create a professional ATS resume.

Name: ${body.name}
Country: ${body.country}
Job: ${body.job}
Experience: ${body.experience}
`
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(data);

    if (!data.choices) {
      return Response.json({
        cv: 'Error: AI response failed. Check API key or Groq account.'
      });
    }

    return Response.json({
      cv: data.choices[0].message.content
    });

  } catch (error) {
    return Response.json({
      cv: 'Server error: ' + error.message
    });
  }
}