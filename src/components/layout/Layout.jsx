import { useState } from "react";
import { Navbar } from "./Navbar";
import { SideNav } from "./SideNav";

const Layout = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(true);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar onMenuClick={() => setIsSidenavOpen(true)} />
      <div className="flex pt-16">
        <SideNav
          isOpen={isSidenavOpen}
          onClose={() => setIsSidenavOpen(false)}
        />
        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidenavOpen ? "ml-64" : "ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export { Layout };
