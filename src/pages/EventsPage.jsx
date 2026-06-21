import React from 'react'
import Header from '../components/Layout/header'
import Footer from '../components/Layout/Footer'
import Events from '../components/Events/Events'
import EventCard from '../components/Events/EventCard'
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";
export default function EventsPage() {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
     <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[allEvents.length-1]} />
        </div>
      )}
    </>
  )
}
