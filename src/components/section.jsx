export default function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h1 className="text-2xl font-bold text-black">{title}</h1>
      {children}
    </section>
  );
}
