import type { JSX } from "react";
import { useRef, useState } from "react";

type LinkRecord = {
	old: string,
	new: string
}

export default function LinkShortener(): JSX.Element {
	const [links, setLinks] = useState<LinkRecord[]>([]);
	const inputRef = useRef<HTMLInputElement>(null)
	function handleClick(): void {
		if (!inputRef.current)
			return
		const longUrl = inputRef.current.value;
		fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`)
			.then(data => data.text())
			.then(shortUrl => setLinks(oldLinks => [...oldLinks, { old: longUrl, new: shortUrl }]))
		inputRef.current.value = ""

	}

	return (
		<div>
			<div className="w-full bg-purple-300 flex p-10 rounded-xl mb-16 gap-8 shortener">
				<input type="text" name="link" id="input-link" ref={inputRef} placeholder="Shorten a link here..." className="p-4 rounded-md bg-white w-[80%] placeholder:text-(--gray-500) text-black" />
				<button type="submit" className="cursor-pointer bg-(--blue-400) px-6 py-2 text-white font-medium rounded-md w-[20%] hover:opacity-80" onClick={handleClick}>Shorten it!</button>
			</div>

			{links.map(link => <div key={link.old} className="text-black"><a href={link.new}>{link.new}</a></div>)}
		</div>
	)
}