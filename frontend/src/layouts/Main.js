import React from "react";
import background from "../assets/images/register_bg_2.png";
import { Outlet } from "react-router";

export default function Main() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>
          <Outlet />
        </section>
      </main>
    </>
  );
}
