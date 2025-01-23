const Footer = () => {
  return (
    <footer suppressHydrationWarning={true}>
      <div className="inner-footer">
        <p>
          &copy; {new Date().getFullYear()} Ignite Inclusive Leadership. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
