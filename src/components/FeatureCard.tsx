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
    <div className='max-w-[300px]'>
      <h1 className='text-xl font-bold text-black'>{heading}</h1>
      <p className="text-(--gray-500)">{description}</p>
    </div>
  );
}
