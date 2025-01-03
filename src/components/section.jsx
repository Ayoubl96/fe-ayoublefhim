// eslint-disable-next-line react/prop-types
export default function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h1 className="text-2xl font-bold text-black dark:text-white">{title}</h1>
      {children}
    </section>
  );
}
