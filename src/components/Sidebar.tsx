const Sidebar = () => (
  <div className="w-64 bg-gray-900 h-screen fixed p-4">
    <h2 className="text-xl font-bold text-white">Menu</h2>
    <ul>
      <li className="text-gray-300 hover:text-white"><a href="#home">Home</a></li>
      <li className="text-gray-300 hover:text-white"><a href="#experience">Experience</a></li>
      <li className="text-gray-300 hover:text-white"><a href="#projects">Projects</a></li>
    </ul>
  </div>
);

export default Sidebar;

