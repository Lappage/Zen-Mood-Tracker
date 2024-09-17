import "./globals.css";

export const metadata = {
  title: "Mood Tracker",
  description: "Track your mood, every day of the year!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
