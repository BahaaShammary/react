import React from 'react'
import {Link, useLocation, Outlet} from "react-router-dom"

// will be responsible for all the pages that are part of our app
// Using the router, we can move to these different pages based on the url
export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="events">Events</Link>
            </nav>
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2>Our services</h2>
        </div>
    )
}

export function CompanyHistory() {
    return (
        <div>
            <h2>Our Company History</h2>
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    )
}


export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>
                [Contact]
            </h1>
        </div>
    );
}

export function Woops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Page not found at {location.pathname}</h1>
        </div>
    )
}