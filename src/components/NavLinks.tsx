import { navLinks } from "../data/resources.json";

const NavLinks = ({ className = "" }: { className?: string }) =>
  navLinks.map(({ name, href }) => (
    <li key={name} className={className}>
      <a href={href}>{name}</a>
    </li>
  ));

export default NavLinks;
