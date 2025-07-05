import { IconType } from "react-icons";

type Props = {
  title: string;
  Icon: IconType;
}

export const SectionTitle = ({title, Icon}: Props) => {
  return (
    <>
      <div className="flex items-center gap-2 pb-2 text-xl">
        <Icon />
        <h4 className="text-transform: uppercase">{title}</h4>
      </div>
      <hr className="border-gray-200" />
    </>
  )
}