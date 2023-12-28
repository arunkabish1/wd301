const Header = () => {
  return (
    <nav className="bg-teal-600 py-4">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center w-1/3">
            <a href="/home" className="ml-6 text-white hover:text-teal-300">
              Home
            </a>
            <a href="/tasks" className="ml-6 text-white hover:text-teal-300">
              Tasks
            </a>
          </div>
          <div className="flex items-center w-1/3 justify-center">
            <h2 className="text-white text-lg font-bold">Smarter Tasks</h2>
          </div>
          <div className="flex items-center w-1/3 justify-end">
            <a href="/signin" className="ml-6 text-white hover:text-teal-300">
              Signout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
