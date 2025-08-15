import type { JSX } from "react";

type FeatureCardProp = {
  icon?: string;
  heading: string;
  description: string;
};

export default function FeatureCard({
  icon,
  heading,
  description,
}: FeatureCardProp): JSX.Element {
  
  return (
    <div className={`max-w-[300px] relative before:content-(${icon}) before:absolute before:top-[-15%] before:left-[10%] px-4 pt-8 pb-4`}>
      <h1 className='text-xl font-bold text-black'>{heading}</h1>
      <p className="text-(--gray-500)">{description}</p>
    </div>
  );
}
