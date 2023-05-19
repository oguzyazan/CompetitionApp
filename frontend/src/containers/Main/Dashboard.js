import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImageGrid } from "../../components";

export default function Dashboard() {
  const {t} = useTranslation();
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <ImageGrid/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}