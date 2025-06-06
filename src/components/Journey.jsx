import journeyImg from "../assets/journey.png"; // Make sure you have a journey.png in assets folder

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#111111] text-white py-16 px-6 sm:px-10 max-w-6xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">
            How I Got Into This Field
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg sm:text-xl text-justify">
            My journey into data and analytics started with a strong curiosity about
            how decisions are driven by data. During my academic projects, I explored
            Python and SQL, which led me to build small insights dashboards and
            automate data pipelines. Interning at S.O Infotech gave me real-world
            exposure to Power BI, web scraping with Selenium, and even building a face
            recognition system using OpenCV. These hands-on experiences solidified my
            interest in the field and motivated me to pursue data analytics as a career.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full sm:w-[200px] md:w-[250px]">
          <img
            src={journeyImg}
            alt="Journey Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
