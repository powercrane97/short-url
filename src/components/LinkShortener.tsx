import type { JSX } from "react";

export default function LinkShortener(): JSX.Element {
	return (
		<div className="h-[100px] max-w-[600px] bg-purple-300 m-auto flex-center rounded-2xl mb-16">
			<input type="text" name="link" id="input-link" placeholder="Shorten a link here..." className="p-2 rounded-m bg-white" />
			<button type="submit" className="cursor-pointer bg-(--blue-400) px-6 py-2 text-white font-medium rounded-md">Shorten it!</button>
		</div>
	)
}