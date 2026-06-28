import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-500 py-12 px-4">

        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">

          <h1 className="text-5xl font-bold text-center text-white mb-8">
            About PollHub
          </h1>

          <p className="text-white/90 text-lg leading-8 text-center">
            PollHub is a modern real-time polling platform where users can
            create polls, participate in voting, and instantly view live
            results. Our goal is to make decision-making simple, engaging,
            and interactive for everyone.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-3">
                📊 Create Polls
              </h2>

              <p className="text-white/80">
                Easily create custom polls with multiple options and share
                them with friends, teams, or communities.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-3">
                ⚡ Real-Time Voting
              </h2>

              <p className="text-white/80">
                Watch poll results update instantly as users cast their votes
                from anywhere in the world.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-3">
                🔒 Secure Platform
              </h2>

              <p className="text-white/80">
                Authentication and secure data management ensure a reliable
                voting experience.
              </p>
            </div>

          </div>

          <div className="mt-12 bg-white/10 rounded-2xl p-8 border border-white/20">

            <h2 className="text-3xl font-bold text-white mb-4">
              🚀 Our Mission
            </h2>

            <p className="text-white/80 leading-8">
              PollHub aims to provide a fast, user-friendly, and transparent
              polling system that helps individuals, organizations, and
              communities gather opinions and make better decisions through
              real-time participation.
            </p>

          </div>

          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold text-white">
              Developed by Vishal Gorai
            </h3>

            <p className="text-white/70 mt-2">
              Full Stack MERN Developer
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;