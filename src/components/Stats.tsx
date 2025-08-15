import type { JSX } from "react";

export default function Stats(): JSX.Element {
	return (
		<div className="m-auto text-center max-w-[500px] mb-20 content">
			<h1 className="text-3xl font-bold mb-4">Advanced Statistics</h1>
			<p className="text-(--gray-500)">Track how your links are performing across the web with our advanced statistics dashboard</p>
		</div>
	)
}