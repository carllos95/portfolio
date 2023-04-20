export default function Home() {
  return <div className="mt-10">
    <p className="mb-12">Hi all, I&apos;m</p>
    <h1 className="text-4xl text-textDeveloper mb-12">{`>`} Front End Developer</h1>

    <p className="text-textComment mb-3 text-lg">{`//`} welcome to my portfolio</p>
    <p className="text-textComment mb-3 text-lg">{`//`} you can also see my projects on my Github page</p>

    <h2 className="text-lg mb-7">
      <span className="text-textDeveloper">{`const`}</span>
      <span className="text-githubLink">{` githublink`}</span> =
      <a className="text-link" href="https://github.com/carllos95"> https://github.com/carllos95</a>
    </h2>
    <button className="px-5 py-3 rounded-full border-2 border-curriculum">curriculum</button>
  </div>
}
