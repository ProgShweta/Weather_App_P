import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import WeekForecast from "@/components/WeekForecast";

let obj = {
  date: "12",
  day: {
    condition: {
      icon: "/icon-192x192.png",
      text: "tuesday",
    },
    maxtemp_f: 12,
    mintemp_f: 2,
  },
}

let objects = {

  forecast: {
    forecastday: [obj]

  }

}


describe('Current', () => {
  it('should render properly', () => {
    render(<WeekForecast data={objects} />);
    screen.getByRole("heading", {
      name: "Week"
      // name:,/Weather App/i
    });
  });


});