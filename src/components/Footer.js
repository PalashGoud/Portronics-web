import React from 'react';

function Footer() {
  return (
    <footer className="mt-32 bg-[#1D1D1D] py-16">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center sm:justify-start">
            <img
              src="https://www.portronics.com/cdn/shop/files/logo_f6f5e2d7-11ef-46f4-b9b8-4d4c99fe098f.png"
              alt="Portronics Logo"
              className="h-12"
            />
          </div>

          <p className="mt-4 text-center text-white sm:text-left lg:mt-0 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-700 pt-16 md:grid-cols-4 lg:grid-cols-6">
          <FooterColumn
            title="About Us"
            links={[
              { name: 'Company History' },
              { name: 'Meet the Team'},
              { name: 'Employee Handbook' },
              { name: 'Careers' }
            ]}
          />
          <FooterColumn
            title="Our Services"
            links={[
              { name: 'Web Development'},
              { name: 'Web Design' },
              { name: 'Marketing' },
              { name: 'Google Ads' }
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { name: 'Online Guides' },
              { name: 'Conference Notes'},
              { name: 'Forum' },
              { name: 'Downloads' },
              { name: 'Upcoming Events' }
            ]}
          />
          <FooterColumn
            title="Helpful Links"
            links={[
              { name: 'FAQs' },
              { name: 'Support' },
              {
                name: 'Live Chat',
                
                isSpecial: true
              }
            ]}
          />
          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium text-white">Stay in Touch</p>
            <div className="mx-auto mt-8 max-w-md sm:mx-0">
              <p className="text-gray-500">
                Subscribe to get the latest updates.
              </p>
              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <input
                    className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white hover:bg-indigo-600 transition"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            Copyright &copy; 2024 Portronics. All rights reserved.
          </p>
          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <FooterSocialLink platform="Facebook" />
            <FooterSocialLink platform="Instagram" />
            <FooterSocialLink platform="Twitter" />
            <FooterSocialLink platform="GitHub" />
            <FooterSocialLink platform="Dribbble" />
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-white">{title}</p>
      <ul className="mt-8 space-y-4 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a
              className={`transition hover:text-gray-300 ${link.isSpecial ? 'flex items-center gap-2' : 'text-gray-400'}`}
              href={link.url}
            >
              {link.name}
              {link.isSpecial && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterSocialLink({ platform }) {
  const icons = {
    Facebook: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
    Instagram: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a2.988 2.988 0 00-.748-1.15 2.988 2.988 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zm0 4.703a4.497 4.497 0 104.497 4.497 4.497 4.497 0 00-4.497-4.497zm0 7.496a2.999 2.999 0 11-2.999-2.999 2.999 2.999 0 012.999 2.999zm5.61-7.756a1.049 1.049 0 11-2.098 0 1.049 1.049 0 012.098 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
    // Add more icons if needed.
  };

  return (
    <li>
      <a className="text-white transition hover:text-gray-300" >
        {icons[platform]}
        <span className="sr-only">{platform}</span>
      </a>
    </li>
  );
}

export default Footer;
