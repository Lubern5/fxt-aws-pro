export const dynamic = "force-dynamic"; // 👈 forces SSR

export default async function SSRPage() {
  const time = new Date().toISOString();
  return (
    <div style={{ padding: 50, fontFamily: "sans-serif" }}>
      <h1>SSR is WORKING ✅</h1>
      <p>Server rendered at: {time}</p>
    </div>
  );
}
