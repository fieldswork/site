import "./globals.css";

export const metadata = {
  title: "salmonline.us",
  description: "site under construction ⚠️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '"Courier New", monospace' }}>
        {children}
      </body>
    </html>
  );
}