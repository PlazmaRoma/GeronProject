import React from "react";
import { FC } from "react";
import { DarkCard } from "./src/components/Card_dark";
import { LightCard } from "./src/components/Card_light";
import { LightblueCard } from "./src/components/Card_lightblue";

export const App: FC = function App() {
  return (
    <div className="h-screen flex justify-center items-center px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex gap-4">
          <DarkCard />
          <LightCard />
          <LightblueCard />
        </div>
      </div>
    </div>
  );
};
