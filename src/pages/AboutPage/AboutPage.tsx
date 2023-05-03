const AboutPage = () => {
  return (
    <div className="text-left">
      {/* TODO: create atoms*/}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex-[1_0_auto] p-3 ml-3">
          <img
            loading="lazy"
            alt="Jhon Doe"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
            className="my-Avatar-img max-w-full h-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">New album is released!</h2>
          <h6 className="card-category">CEO / CO-FOUNDER</h6>
          <h4 className="card-title">John Doe</h4>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>
          <p>Word of the Day</p>
          <h2 className="MuiTypography-root MuiTypography-h5">
            be<span className="jss15">•</span>nev
            <span className="jss15">•</span>o<span className="jss15">•</span>
            lent
          </h2>
          <p>adjective</p>
          <p>
            well meaning and kindly.
            <br />
            &apos;a benevolent smile&apos;
          </p>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
