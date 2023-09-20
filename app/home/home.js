import IcoScene from "../icoscene/Icoscene";

function Home(props) {
  return (
    <div className="flex flex-col justify-center text-left mx-5" {...props}>
      <p className="indent-8 text-lg text-black dark:text-white">
        Eager and self-driven professional with a passion for excellence,
        seeking an exciting opportunity as a Software Engineer. I aim to channel
        my expertise in quality assurance and development lifecycles to enhance
        the customer experience and play a pivotal role in product and company
        success. My dedication to top-notch results, coupled with an optimistic
        perspective, is poised to make a significant impact within a dynamic
        organization that values innovation, effective communication, and
        steadfast work ethics.
      </p>
      <p className="indent-8 text-lg py-5 leading-8 text-black dark:text-white">
        I have 5 years of professional experience in the PV and renewable energy
        monitoring industry. I found that I truly enjoy becoming an expert and
        taking on responsibility with high expectations to execute. I like to be
        the subject matter expert and am able to learn quickly to fill the gaps
        that your company needs filled.
      </p>
      <p className="indent-8 md:text-center text-lg py-5 leading-8 text-black dark:text-white">
        <br />
        <b>
          I enjoy working with React - which was used to create this website
          utilizing next.js, TailwindCss and Three.js / React Fiber Three.
        </b>
      </p>
      <div>
        <IcoScene className="absolute" />
      </div>
    </div>
  );
}

export default Home;
