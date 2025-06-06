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
            When my mom said, “Drink water while sitting; it’s better for your
            health,” my first reaction wasn’t to listen—it was to investigate.
            Where’s the data? What study proves this? I wasn’t just curious; I
            needed cold, hard stats.
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed text-lg sm:text-xl text-justify">
            So, I went down the rabbit hole YouTube videos, scientific papers,
            hydration graphs analyzing patterns like a detective. I even ran my
            own “experiments” (drinking water standing, sitting, even mid-squat)
            just to test the logic. Turns out, I didn’t just quench my thirst, I
            discovered my love for data.
          </p>
          <br />

          <p className="text-gray-300 leading-relaxed text-lg sm:text-xl text-justify">
            That mindset led me to data science, where I turn raw numbers into
            insights, challenge assumptions, and find patterns others miss. From
            building ML models to visualizing trends, I don’t just analyze
            data—I make it tell a story.
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
