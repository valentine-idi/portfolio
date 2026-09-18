import { type IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Icon from "./Icon";
import { links } from "../data/resources.json";

const icons: Record<string, IconType> = {
  FiGithub,
  FiLinkedin,
  FiMail,
};

const IconLinks = ({ className = "" }: { className?: string }) => {
  return links.map(({ url, icon }) => {
    const IconComponent = icons[icon];

    return (
      <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
        <Icon className={className} icon={IconComponent} />
      </a>
    );
  });
};

export default IconLinks;
