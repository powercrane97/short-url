import type { JSX } from "react";


type CallToActionProps = {
	heading: string
}
export default function CallToAction({heading} : CallToActionProps): JSX.Element {
	return (
		<div className="m-auto">
			<h1 className="text-4xl">{heading}</h1>
			<button type="button" className="text-xl font-medium px-4 py-2 bg-(--blue-400) rounded-4xl text-white">Get Started</button>
		</div>
	)
}
