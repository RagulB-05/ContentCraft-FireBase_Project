import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p>
        <i className="bi bi-c-circle"></i> 2030 <Link to="/">ContentCraft</Link>
        . All Rights Reserved
      </p>
    </footer>
  );
};
