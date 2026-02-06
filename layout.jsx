import "./globals.css";

export const metadata = {
  title: "FlowGenius | AI-Automatisierung für KMUs",
  description:
    "FlowGenius automatisiert Prozesse für KMUs mit AI Agents, n8n-Workflows und individuellen Integrationen. Weniger manuelle Arbeit, mehr Fokus aufs Kerngeschäft."
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
