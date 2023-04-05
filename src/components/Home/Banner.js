/**
 * The function returns a banner component with promotional content for opening a savings account with
 * Argent Bank.
 * @returns A React functional component called "Banner" is being returned. It renders a div with a
 * class name "hero" and a section with a class name "hero-content". Inside the section, there are
 * several paragraphs with class names "subtitle" and a final paragraph with class name "text". The
 * component also includes a hidden heading with class name "sr-only" that reads "Promoted Content".
 */
function Banner() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Banner;
