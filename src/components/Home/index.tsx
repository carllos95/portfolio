/* eslint-disable @next/next/no-html-link-for-pages */
export default function Home() {
  const curriculumPath = '/carlos-dantas.pdf'

  const downloadFile = (url: string) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName ? fileName : '')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return <div className="mt-10 flex justify-between flex-col lg:flex-row">
    <div className="w-full lg:w-[47%] mb-8 lg:mb-0">
      <p className="mb-12">Hi all, I&apos;m</p>
      <h1 className="text-4xl text-textDeveloper mb-12">{`>`} Front End Developer</h1>

      <p className="text-textComment mb-3 text-lg">{`//`} welcome to my portfolio</p>
      <p className="text-textComment mb-3 text-lg">{`//`} you can also see my projects on my Github page</p>

      <h2 className="text-lg mb-7">
        <span className="text-textDeveloper">{`const`}</span>
        <span className="text-githubLink">{` githublink`}</span> =
        <a className="text-link" href="https://github.com/carllos95" target="_blank"> https://github.com/carllos95</a>
      </h2>
      <button onClick={() => downloadFile(curriculumPath)} className="px-5 py-3 rounded-full border-2 border-curriculum">Curriculum</button>
    </div>
    <div className="w-full lg:w-[50%]">
      <p className="mb-12">About me</p>
      <p className="text-textComment mb-3 text-lg">{`/*`} Working as Front-end web developer. I always seek to improve my knowledge and stay up to date with the market. Graduated in Front-End Development, from the NewTab Academy programming school, where I was able to acquire knowledge in languages ​​and frameworks. Graduated in Game Development Technology. With this degree I was able to acquire knowledge in programming logic, as well as programming languages, knowledge in agile methodologies, such as SCRUM and Kamban. During the course I developed teamwork and project creation practices, as well as project documentation and standardization. {`*/`}</p>
    </div>
  </div>
}
