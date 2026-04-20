export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <form className="w-full max-w-md flex flex-col gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-700"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-700"
          required
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded bg-gray-800 border border-gray-700"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>

      </form>

    </main>
  );
}