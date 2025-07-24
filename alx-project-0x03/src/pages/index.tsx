import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Splash App</h1>
        <p className="text-lg text-gray-600">Your one-stop platform for all your needs</p>
      </section>
    </Layout>
  );
}
