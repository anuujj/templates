import { IBasicCardProps } from './type';
import rightArrow from '../../assets/icon-arrow-right-color.svg';

const BasicCard = ({
  title,
  description,
  footer,
  backgroundImg,
}: IBasicCardProps) => {
  return (
    <div className="group relative h-[30rem] w-80 cursor-pointer overflow-hidden text-left text-white">
      <div className="bg-black-gradient absolute left-0 top-0 z-[-1] h-full w-full opacity-0 group-hover:opacity-90"></div>
      <div className="transition-[opacity, transform] m-[1rem] translate-y-[2rem] opacity-0 duration-200 ease-in group-hover:translate-y-[4rem] group-hover:opacity-100">
        <h2 className="mb-6 text-3xl font-bold italic">{title}</h2>
        <p>{description}</p>
      </div>
      <footer className="transition-[opacity, transform] m-[1rem] flex translate-y-[10rem] justify-between opacity-0 duration-200 ease-in group-hover:translate-y-[8rem] group-hover:opacity-100">
        <p className="text-2xl font-semibold">{footer}</p>
        <img
          src={rightArrow}
          alt="right arrow"
          className="rotate-360 h-8 w-auto translate-x-[-3rem] transition-transform delay-200 duration-100 group-hover:translate-x-[-1rem] group-hover:rotate-0"
        />
      </footer>
      <img
        src={backgroundImg}
        alt={title}
        className="absolute left-0 top-0 z-[-2] block h-full w-full scale-125 object-cover transition-transform duration-200 ease-in group-hover:scale-100"
      />
    </div>
  );
};
export default BasicCard;
