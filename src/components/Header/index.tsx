import { SetStateAction, useState } from "react"

interface HeaderProps {
  setPage: (name: string) => void
  page: string
}

export default function Header({ setPage, page }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <header className={`flex items-center justify-between md:h-[96px] border-b-2 border-borderBottom py-2 md:py-0 px-5 md:px-0 md:mx-[113px] md:pt-7`}>
      <h2 className="text-textColor font-bold">{`< CarlosDantas />`}</h2>
      <button type="button" className="md:hidden flex flex-col justify-start" onClick={() => (setOpenMenu(!openMenu))}>
        <h2 className="flex text-textMenu">{'<'}<span className="text-githubLink">Menu</span>{'>'}</h2>
        {openMenu === false && (
          <p className="leading-[0.5] pb-[5px] text-textMenu">...</p>
        )}
        {openMenu === true && (
          <ul className=" md:flex h-full transition-all duration-300">
            <li className="px-5 py-1 border-borderBottom flex">
              <button className={`${page === 'home' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('home')}>_hello</button>
            </li>
            {/* <li className="px-5 py-1 border-borderBottom  flex">
              <button className={`${page === 'about' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('about')}>_about-me</button>
            </li> */}
            <li className="px-5 py-1 border-borderBottom  flex">
              <button className={`${page === 'skills' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('skills')}>_skills</button>
            </li>
            <li className="px-5 py-1 border-borderBottom  flex">
              <button className={`${page === 'projects' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('projects')}>_projects</button>
            </li>
            <li className="px-5 py-1 flex">
              <button className={`${page === 'contact' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('contact')}>_contact-me</button>
            </li>
          </ul>
        )}
        <h2 className="flex text-textMenu">{'</'}<span className="text-githubLink">Menu</span>{'>'}</h2>
      </button>
      <ul className="hidden md:flex h-full">
        <li className="px-5 border-r-2 border-borderBottom flex">
          <button className={`${page === 'home' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('home')}>_hello</button>
        </li>
        {/* <li className="px-5 border-borderBottom border-r-2 flex">
          <button className={`${page === 'about' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('about')}>_about-me</button>
        </li> */}
        <li className="px-5 border-borderBottom border-r-2 flex">
          <button className={`${page === 'skills' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('skills')}>_skills</button>
        </li>
        <li className="px-5 border-borderBottom border-r-2 flex">
          <button className={`${page === 'projects' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('projects')}>_projects</button>
        </li>
        <li className="px-5 flex">
          <button className={`${page === 'contact' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('contact')}>_contact-me</button>
        </li>
      </ul>
    </header>
  )
}
