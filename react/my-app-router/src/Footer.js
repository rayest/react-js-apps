import React from "react";
import { useStoreState } from "easy-peasy";

const Footer = () => {
  const postCount = useStoreState((state) => state.postCount);
  return (
    <footer className="Footer">
      <p> { postCount } Blogs </p>
    </footer>
  );
};

export default Footer;
