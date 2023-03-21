import FounderPicture from "assets/images/founder/index_founder.png";
function FoundersFullProfile() {
  return (
    <>
      <section className="group bg-surface  flex flex-col-reverse items-center gap-6 text-justify md:flex-row lg:text-left">
        <div
          className="animate-fadeInDown bg-surface p-6 text-onSurface shadow-sm hover:shadow-md md:w-3/5"
          style={{ opacity: 1 }}
        >
          <h2 className="mb-2 p-1 text-3xl font-bold group-hover:cursor-pointer">
            Fr. Charles J. Young
          </h2>
          <p className="mb-4 p-1 font-semibold group-hover:cursor-pointer">
            Founder of Dhaka Credit
          </p>
          <p className="mb-2 text-justify p-1 group-hover:cursor-pointer">
            An american father named, Charles J. Young CSC founded "The
            Christian Co-Operative Credit Union" on July 3rd, 1955, which is
            also famously known as ‘Dhaka Credit’. According to the 1940
            Co-Operative Act, "Dhaka Credit" was registered in 1958 with
            registration number “42/1958”. Dhaka Credit’s Head Office is located
            in Tejgaon, East Tejturibazar, Dhaka. It is a trustworthy financial
            institution providing various services to the christian community in
            bangladesh. Dhaka Credit is committed to providing the best services
            to its member with different schemes and activities to promote
            thrifts and savings to upgrade the members’ standard of living.
            "Dhaka Credit" is the first & largest credit union of its kind
            currently in bangladesh. The operational area of "Dhaka Credit"
            includes Dhaka, Gazipur, Narayanganj & Munshiganj districts with
            over 43,000 members currently active in "Dhaka Credit". "Dhaka
            Credit" is currently providing various services through its 12
            service centers and 20 collection booths. As of June 2022, there is
            nearly 600 professional staff along with part-time students
            currently employed in "Dhaka Credit". Dhaka Credit is providing
            around 86 products with the policies being constantly updated to
            make the products more member friendly and provide maximum benefits
            to the members. The construction of the ""Divine Mercy Hospital" at
            Kuchilabari in the district of Gazipur is under process and are
            looking to commence its operation in 2022. It is a 300-bed hospital
            situated in Gazipur, adjacent to dhaka city. The vast infrastructure
            having most of the health service departments will be completed by
            2022 and will start its operation by the end of the year. This mega
            project will follow a medical college and a nursing college on the
            hospital’s vast campus.
          </p>
        </div>
        <div className="lg:w-2/5" style={{ opacity: 1 }}>
          <img src={FounderPicture} className="w-full animate-fadeIn" alt="" />
        </div>
      </section>
    </>
  );
}

export default FoundersFullProfile;
