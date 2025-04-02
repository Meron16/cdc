import React, { useState } from 'react';

function Events() {
  const [activeCategory, setActiveCategory] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'expert-talks', name: 'Expert Talks' },
    { id: 'soft-skills', name: 'Soft Skill Trainings' },
    { id: 'career-visits', name: 'Career Visits' },
    { id: 'other', name: 'Other Events' }
  ];

  const events = [
    // Expert Talks
    {
      title: "Dr. Erssido Speech",
      date: "2013",
      category: "expert-talks",
      description: "Insightful presentation on industry trends and career opportunities.",
      link: "https://t.me/bitcdc",
      linkText: "More on BiT CDC Telegram channel"
    },
    {
      title: "Dr. Endalamaw Speech",
      date: "2013",
      category: "expert-talks",
      description: "Valuable insights on professional development for engineering students.",
      link: "https://t.me/bitcdc",
      linkText: "More on BiT CDC Telegram channel"
    },
    {
      title: "Mekdela Mekuria Talk",
      date: "2014",
      category: "expert-talks",
      description: "Engaging discussion on emerging technologies and career paths."
    },
    
    // Soft Skill Trainings
    {
      title: "21st Century Skills for STEM",
      date: "2013",
      category: "soft-skills",
      description: "Essential skills needed for success in STEM fields in the modern workplace."
    },
    {
      title: "LinkedIn Basics with Brukawit",
      date: "2013",
      category: "soft-skills",
      description: "Learn how to create an effective LinkedIn profile and build your professional network."
    },
    {
      title: "Machine Learning Workshop",
      date: "2014",
      category: "soft-skills",
      description: "Introduction to machine learning concepts and practical applications."
    },
    {
      title: "LinkedIn Fundamentals",
      date: "2016",
      category: "soft-skills",
      description: "Comprehensive training on leveraging LinkedIn for career advancement."
    },
    {
      title: "Life Skills Training",
      date: "2016",
      category: "soft-skills",
      description: "Developing essential interpersonal and self-management skills for professional success."
    },
    {
      title: "Freshmen Orientation",
      date: "2017",
      category: "soft-skills",
      description: "Introduction to university life and career planning for new students."
    },
    {
      title: "Effective Presentation Skills",
      date: "2017",
      category: "soft-skills",
      description: "Master the art of delivering impactful presentations in professional settings."
    },
    
    // Career Visits
    {
      title: "Industry Site Visits",
      date: "2014",
      category: "career-visits",
      description: "Organized visits to leading companies to explore real-world work environments.",
      link: "https://t.me/bitcdc",
      linkText: "More on BiT CDC Telegram channel"
    },
    {
      title: "GERD Site Visit",
      date: "2015",
      category: "career-visits",
      description: "Educational tour of the Grand Ethiopian Renaissance Dam construction site."
    },
    
    // Other Events
    {
      title: "CDC Inauguration",
      date: "2014",
      category: "other",
      description: "Official launch of the BiT Career Development Center.",
      link: "https://t.me/bitcdc",
      linkText: "More on BiT CDC Telegram channel"
    },
    {
      title: "Employability and Job Readiness ToT",
      date: "2013",
      category: "other",
      description: "Training of trainers program focused on preparing students for the job market."
    },
    {
      title: "American Window Programs",
      date: "2014",
      category: "other",
      description: "Online sessions providing information about educational opportunities in the United States."
    }
  ];

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-bit-blue">
              Events
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-bit-blue">Past & Upcoming Events</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our rich history of events and stay updated with upcoming opportunities.
            </p>
          </div>
        </div>
        
        {/* Event Category Tabs */}
        <div className="flex justify-center mt-8 mb-12 overflow-x-auto pb-2">
          <div className="inline-flex items-center rounded-md border border-gray-200 bg-white p-1 shadow-sm">
            {eventCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  activeCategory === category.id
                    ? "bg-bit-blue text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <div key={index} className="flex flex-col h-full rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 rounded-full bg-bit-blue"></div>
                <span className="text-sm font-medium text-gray-500">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-bit-blue mb-2">{event.title}</h3>
              <p className="text-gray-600 flex-grow">{event.description}</p>
              
              {event.link && (
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-bit-blue hover:underline flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  {event.linkText}
                </a>
              )}
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-bit-blue">
                  {eventCategories.find(cat => cat.id === event.category)?.name || 'Event'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
          <div className="rounded-lg border bg-white p-6 shadow-sm w-full max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-bit-blue">Interested in our events?</h3>
                <p className="text-gray-500">Join our mailing list to stay updated with upcoming events and opportunities.</p>
              </div>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bit-blue focus:ring-offset-2"
                />
                <button className="h-10 rounded-md bg-bit-blue px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-bit-blue/90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;