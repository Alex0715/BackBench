function Footer() {
    return (
        <div>
            <head>
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>

  <body>
    <footer className="border-t border-gray-500 bg-gray-700">
      <div
        className="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div
          className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
        >
          <a
            className="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-yellow-400
              md:justify-start
            "
          >
            BackBenchers!
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at sequi cum, impedit fuga in placeat illo eum minima possimus est
            perferendis distinctio explicabo eos natus consequuntur blanditiis
            odio optio?
          </p>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Useful Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://back-benchers.vercel.app/">Home</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://www.facebook.com/arjun.rokz.75/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Useful Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-gray-400 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Contacts
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://www.facebook.com/arjun.rokz.75/">Chirantan Bose</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">arjunbose.ar@gmail.com</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">7003474297</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://www.facebook.com/arjun.rokz.75/">Contact for cheapest website development and management</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-base text-gray-400">
          All rights reserved by @ CB_2021
        </p>
      </div>
    </footer>
  </body>
        </div>
    )
}

export default Footer
