import { IconContext, type IconType } from "react-icons";

interface Props {
  className: string;
  icon: IconType;
}

const Icon = ({ className = "", icon: Icon }: Props) => {
  return (
    <IconContext.Provider value={{ className }}>
      <Icon />
    </IconContext.Provider>
  );
};

export default Icon;
