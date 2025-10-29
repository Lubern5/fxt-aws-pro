import HomeClient from "@/components/HomeClient";

// 👇 Add this line — forces SSR instead of static HTML
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return <HomeClient />;
}
