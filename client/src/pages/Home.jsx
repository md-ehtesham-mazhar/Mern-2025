import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Thapa Technical</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse
                impedit natus autem officiis nostrum corporis beatae, deleniti
                ducimus optio, similique eveniet eos laboriosam velit, facilis
                alias debitis quae. Asperiores.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />
      s
      {/* 3rd section */}
      <section className="section-hero">
          <div className="container grid grid-two-cols">

             {/* hero image */}
             <div className="hero-image">
              <img
                src="/images/design.png"
                alt="coding together"
                width="400"
                height="400"
              />
            </div>

            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse
                impedit natus autem officiis nostrum corporis beatae, deleniti
                ducimus optio, similique eveniet eos laboriosam velit, facilis
                alias debitis quae. Asperiores.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

          </div>
        </section>
    </>
  );
};
