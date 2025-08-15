import type { JSX } from "react";


type CallToActionProps = {
	heading: string
}
export default function CallToAction({heading} : CallToActionProps): JSX.Element {
	return (
		<div className="w-full call-to-action-bg">
			<div className="m-auto text-center w-full h-[200px] flex flex-col items-center justify-center content">
				<h1 className="text-4xl mb-4 text-white">{heading}</h1>
				<button type="button" className="text-xl font-medium px-4 py-2 bg-(--blue-400) rounded-4xl text-white hover:opacity-80 cursor-pointer">Get Started</button>
			</div>
		</div>
	)
}
