const imgParam =
  "?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300";


const contactList = [
  {
    image: `https://images.unsplash.com/photo-1501196354995-cbb51c65aaea${imgParam}`,
    name: "Andrew Alfred"
  },
  {
    image: `https://images.unsplash.com/photo-1531123897727-8f129e1688ce${imgParam}`,
    name: "Debra Houston"
  },
  {
    image: `https://images.unsplash.com/photo-1517841905240-472988babdf9${imgParam}`,
    name: "Jane White"
  },
  {
    image: `https://images.unsplash.com/photo-1531427186611-ecfd6d936c79${imgParam}`,
    name: "Ray Flint"
  },
  {
    image: `https://images.unsplash.com/photo-1580489944761-15a19d654956${imgParam}`,
    name: "Mindy Albrect"
  },
  {
    image: `https://images.unsplash.com/photo-1492562080023-ab3db95bfbce${imgParam}`,
    name: "David Arnold"
  }
];
// https://images.unsplash.com/photo-1501196354995-cbb51c65aaea${imgSize}

const Contacts = () => {
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="px-3">
        <div className="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-hidden ring-1 ring-slate-900/5">
          <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
            Contacts
          </div>
          <div className="overflow-auto flex flex-col divide-y h-80 dark:divide-slate-200/5">
            {contactList.map((contact) => {
              return (
                <div className="flex items-center gap-4 p-4" key={contact.name}>
                  <img
                    alt="person"
                    className="w-12 h-12 rounded-full"
                    src={contact.image}
                  />
                  <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                    {contact.name}
                  </strong>
                </div>
              );
            })}
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

export default ContactPage;
