import { Navigation } from "@/app/components/nav.tsx";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 p-4 sm:p-16">
      <Navigation />
      {children}
    </div>
  );
}
