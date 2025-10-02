import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SharePost = () => {
  const baseClasses =
    "bg-gray-light dark:bg-gray-dark mb-3 inline-flex h-9 w-9 items-center justify-center rounded-sm text-body-color duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary sm:ml-3";

  return (
    <>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer" // ✅ added for security
        aria-label="Share on LinkedIn"
        className={baseClasses}
      >
        <FaLinkedinIn size={16} />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Twitter"
        className={baseClasses}
      >
        <FaTwitter size={16} />
      </a>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Facebook"
        className={baseClasses}
      >
        <FaFacebookF size={16} />
      </a>
    </>
  );
};

export default SharePost;
