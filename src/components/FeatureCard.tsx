import type { JSX } from "react";

type FeatureCardProp = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  heading: string;
  description: string;
};

export default function FeatureCard({
  Icon,
  heading,
  description,
}: FeatureCardProp): JSX.Element {
  
  return (
    <div className={`max-w-[300px] relative px-4 pt-16 pb-4 bg-white rounded-md`}>
      <div className="absolute -top-10 left-10 bg-(--purple-950) rounded-full p-4 flex-center mb-4">
        <Icon />
      </div>
      <h1 className='text-xl font-bold text-black'>{heading}</h1>
      <p className="text-(--gray-500)">{description}</p>
    </div>
  );
}
