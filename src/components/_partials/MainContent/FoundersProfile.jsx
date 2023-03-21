import FounderPicture from "assets/images/founder/index_founder.png";
function FoundersProfile() {
  return (
    <section className="group flex flex-col-reverse items-center gap-6 text-justify md:flex-row lg:text-left">
      <div
        className="animate-fadeInDown bg-surface p-6 text-onSurface shadow-sm hover:shadow-md md:w-3/5"
        style={{ opacity: 1 }}
      >
        <a
          className="group-hover:cursor-pointer"
          href="/about/founders-profile"
        >
          <h2 className="mb-2 p-1 text-3xl font-bold group-hover:cursor-pointer">
            Fr. Charles J. Young
          </h2>
          <p className="mb-4 p-1 font-semibold group-hover:cursor-pointer">
            Founder of Dhaka Credit
          </p>
          <p className="mb-2 p-1 group-hover:cursor-pointer">
            The pioneer of the credit union movement in bangladesh, Fr. Charles
            J. Young CSC was born in May 3rd 1904, in New York, USA. His full
            name is Fr. Charles Joseph Young CSC. He was the founder of "The
            Christian Co-Operative Credit Union Ltd. Dhaka," the largest credit
            union in bangladesh and south asia. Fr. Charles joined the seminary
            of the holy cross on September on 1923, and joined in the first
            verse in 1925 &amp; accepted his blessing in 1928. In 1929
          </p>
          <p className="mb-2 p-1 group-hover:underline">Read More</p>
        </a>
      </div>
      <div className="lg:w-2/5" style={{ opacity: 1 }}>
        <img src={FounderPicture} className="w-full animate-fadeIn" alt="" />
      </div>
    </section>
  );
}

export default FoundersProfile;
