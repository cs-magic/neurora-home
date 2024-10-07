import { Navigation } from "@/app/components/nav.tsx";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <div className="px-6 py-16 sm:py-24 lg:py-32 mx-auto space-y-8 md:space-y-16 w-full max-w-7xl">
        {children}
      </div>
    </div>
  );
}
