const Footer = () => {
  return (
    <div className="flex justify-between mt-20 py-5 border-t  dark:text-white">
      <p>2024 - Ayoub Lefhim</p>
      <div>
        <a href="/" className="transition hover:text-primary">
          Home
        </a>{" "}
        /{" "}
        <a href="/blog" className="transition hover:text-primary">
          Blog
        </a>{" "}
        /{" "}
        <a href="/agenda" className="transition hover:text-primary">
          Agenda
        </a>
      </div>
    </div>
  );
};

export default Footer;
