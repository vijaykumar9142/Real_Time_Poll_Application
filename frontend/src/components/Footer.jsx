import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo Section */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              PollHub
            </h2>

            <p className="text-gray-400">
              Create polls, vote instantly, and
              see live results in real time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/home"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/account"
                className="text-gray-400 hover:text-white transition"
              >
                Account
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              Email: support@pollhub.com
            </p>

            <p className="text-gray-400 mt-2">
              Built with MERN Stack
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} PollHub.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;