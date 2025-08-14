import type { JSX } from "react";
export default function Hero(): JSX.Element {
	return (
		<div className="max-w-[500px] mb-24">
			<h1 className="text-6xl font-bold text-(--gray-950)">More than just shorter links</h1>
			<p className="text-(--gray-500) mb-6">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
			<button type="button" className="cursor-pointer bg-(--blue-400) px-6 py-2 rounded-4xl text-white font-medium text-l">Get Started</button>
		</div>
	)
}