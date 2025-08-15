import type { JSX } from "react";
import { useRef, useState } from "react";

type LinkRecord = {
  old: string;
  new: string;
};

function LinkEntry({ link }: { link: LinkRecord }): JSX.Element {
  const [pressed, setPressed] = useState(false);
  
  function copyLink(clipboardContent: string): void {
    if (clipboardContent.length > 0)
      navigator.clipboard.writeText(clipboardContent)
    setPressed(true)
  }
  
  return (
    <div className='text-black flex-between p-4 bg-white rounded-md items-center'>
      <a href={link.old}>{link.old}</a>
      <div>
        <a href={link.new}>{link.new}</a>
        <button
          type='button'
          onClick={() => copyLink(link.new)}
          className={`bg-(--blue-400) text-white p-2 rounded-md ml-4 hover:opacity-80 cursor-pointer ${pressed ? "bg-(--purple-950)" : ""}`}>
          {pressed ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function LinkShortener(): JSX.Element {
  const [links, setLinks] = useState<LinkRecord[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick(): void {
    if (!inputRef.current || !inputRef.current.value.length) return;
    try {
      const longUrl = new URL(inputRef.current.value);
      fetch(`https://tinyurl.com/api-create.php?url=${longUrl.href}`)
        .then(data => data.text())
        .then(shortUrl =>
          setLinks(oldLinks => [
            ...oldLinks,
            { old: longUrl.href, new: shortUrl },
          ])
        );
    } catch (error) {
      console.log(error);
    } finally {
      inputRef.current.value = "";
    }
  }

  return (
    <div className='w-full relative -translate-y-[50%]'>
      <div className='w-full bg-purple-300 flex p-10 rounded-xl mb-16 gap-8 shortener content'>
        <input
          type='text'
          name='link'
          id='input-link'
          ref={inputRef}
          placeholder='Shorten a link here...'
          className='p-4 rounded-md bg-white w-[80%] placeholder:text-(--gray-500) text-black'
        />
        <button
          type='submit'
          className='cursor-pointer bg-(--blue-400) px-6 py-2 text-white font-medium rounded-md w-[20%] hover:opacity-80'
          onClick={handleClick}>
          Shorten it!
        </button>
      </div>

      <div id='linksContainer' className='content flex flex-col gap-4'>
        {links.map(link => (
          <LinkEntry key={link.old} link={link}></LinkEntry>
        ))}
      </div>
    </div>
  );
}
