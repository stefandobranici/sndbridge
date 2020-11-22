import React from "react";

import Banner from "../components/layout/banner/Banner";
import EventList from "../components/menu/events/EventList";

import { events } from "../repository/events";

export const Events = () => {
  return (
    <div>
      <Banner
        title="Our events"
        subtitle="Checkout our past & upcoming events now!"
      />
      <EventList eventList={events} />
    </div>
  );
};

export default Events;
