import { SetStateAction } from "react"

interface HeaderProps {
  setPage: (name: string) => void
  page: string
}

export default function Header({ setPage, page }: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-[96px] mx-[113px] border-b-2 border-borderBottom pt-7">
      <h2 className="text-textColor font-bold">{`< CarlosDantas />`}</h2>
      <ul className="flex h-full">
        <li className="px-5 border-r-2 border-borderBottom flex">
          <button className={`${page === 'home' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('home')}>_hello</button>
        </li>
        <li className="px-5 border-borderBottom border-r-2 flex">
          <button className={`${page === 'about' ? 'text-textActive' : 'text-textMenu'}`} onClick={() => setPage('about')}>_about-me</button>
        </li>
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
