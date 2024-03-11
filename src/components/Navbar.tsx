// import alphaStoryLogo from "/alphastory_logo.png";

function Navbar() {
  return (
    <div className="bg-white flex justify-between items-center">
      <img
        className="p-4 w-64"
        src="/alphastory_logo.png"
        alt="Alpha Story Logo"
      />
      <h1 className="text-lg font-semibold pr-4">
        Alpha Story - Basic React Test (To-Do List)
      </h1>
    </div>
  );
}

export default Navbar;
