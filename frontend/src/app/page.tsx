import HomeClient from "@/components/HomeClient";

// 👇 Add this line — forces SSR instead of static HTML
export const dynamic = "auto";

export default async function HomePage() {
  return <HomeClient />;
}
