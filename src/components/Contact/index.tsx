export default function Contact() {
  return (
    <div className="mt-10 flex justify-center flex-wrap ">
      <div className="pr-14 md:border-r border-contactBorder mb-8 md:mb-0">
        <p className="mb-4">
          <span className="text-contactClass">.contactMe</span> {'{'} <br />
          <span className="ml-4 text-emailPhone">email:</span> <a className="text-emailPhoneLink" href="mailto:carlos95rodrigo@hotmail.com" target="_blank">{'"'}carlos95rodrigo@hotmail.com{'"'}</a>
          <br />
          <span className="ml-4 text-emailPhone">phone:</span> <a className="text-emailPhoneLink" href="https://wa.me/5541998985347" target="_blank">{'"'}(41) 99898-5347{'"'}</a>
          <br />
          {'}'}
        </p>
        <p>
          <span className="text-contactClass">.socialMedias</span> {'{'}
          <br />
          <span className="ml-4 text-emailPhone">linkedIn:</span> <a className="text-emailPhoneLink" href="https://www.linkedin.com/in/carlos-rodrigo-pereira-dantas/" target="_blank">{'"'}carlos-rodrigo-pereira-dantas{'"'}</a>
          <br />
          <span className="ml-4 text-emailPhone">gitHub:</span> <a className="text-emailPhoneLink" href="https://github.com/carllos95" target="_blank">{'"'}carllos95{'"'}</a>
          <br />
          {'}'}
        </p>
      </div>
      <div className="md:ml-[150px] text-center flex flex-col content-center justify-center">
        <h2 className="text-4xl mb-5">Thank you!</h2>
        <p className="text-programming">Programming my tech career like I always wanted.</p>
      </div>
    </div>
  )
}
