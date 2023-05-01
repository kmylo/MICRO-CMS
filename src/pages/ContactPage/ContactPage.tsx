const imgSize =
  "?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80";

const Contacts = () => {
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="px-3">
        <div className="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-hidden ring-1 ring-slate-900/5">
          <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
            Contacts
          </div>
          <div className="overflow-auto flex flex-col divide-y h-80 dark:divide-slate-200/5">
            <div className="flex items-center gap-4 p-4">
              <img
                alt="person"
                loading="lazy"
                className="w-12 h-12 rounded-full"
                src={`https://images.unsplash.com/photo-1501196354995-cbb51c65aaea${imgSize}`}
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Andrew Alfred
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt="person"
                loading="lazy"
                className="w-12 h-12 rounded-full"
                src={`https://images.unsplash.com/photo-1531123897727-8f129e1688ce${imgSize}`}
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Debra Houston
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt="person"
                loading="lazy"
                className="w-12 h-12 rounded-full"
                src={`https://images.unsplash.com/photo-1517841905240-472988babdf9${imgSize}`}
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Jane White
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt="person"
                loading="lazy"
                className="w-12 h-12 rounded-full"
                src={`https://images.unsplash.com/photo-1531427186611-ecfd6d936c79${imgSize}`}
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Ray Flint
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt="person"
                loading="lazy"
                className="w-12 h-12 rounded-full"
                src={`https://images.unsplash.com/photo-1580489944761-15a19d654956${imgSize}`}
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Mindy Albrect
              </strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                alt="person"
                loading="lazy"
                className="w-12 h-12 rounded-full"
                src={`https://images.unsplash.com/photo-1492562080023-ab3db95bfbce${imgSize}`}
              />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                David Arnold
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactPage = () => {
  return (
    <div className="someclass">
      <h1>Contact</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <Contacts />
    </div>
  );
};

export default ContactPage