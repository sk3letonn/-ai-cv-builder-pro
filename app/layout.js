import './globals.css';

export const metadata = {
  title: 'AI CV Builder Pro',
  description: 'AI-powered resume builder'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}