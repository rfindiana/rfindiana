export interface Event {
  title: string;
  date: string; // ISO format: 'YYYY-MM-DD'
  time: string;
  description: string;
  location: string;
  registrationLink?: string;
}

export interface Meeting {
  title: string;
  host: string;
  description: string;
  times: string;
  registrationLink?: string;
}

export interface PastEvent {
  title: string;
  date: string; // ISO format: 'YYYY-MM-DD'
  time: string;
  description?: string;
  location?: string;
}

// Example template for future events
export const exampleEvents: Event[] = [
  {
    title: "Faithful America: Christian Nationalism & Local Action Groups",
    date: "2025-06-05",
    time: "6:00 PM ET",
    description: "WEBINAR: Join Faithful America and Religious Freedom Indiana for a discussion about resisting Christian nationalism by Faithful America's Executive Director, the Rev. Dr. Shannon Fleck, and Rev. Hunter Green, Digital Community Organizer. The Rev. Dr. Shannon Fleck, Faithful America's new Executive Director, and Rev. Hunter Green, Digital Community Organizer, will present on Christian nationalism and their new local action groups via Zoom.",
    location: "Zoom Meeting",
    registrationLink: "https://us06web.zoom.us/meeting/register/Fyz9o7KLSbuvPwORe6YDJQ#/registration"
  }
];

export const upcomingEvents: Event[] = [
  {
    title: "Volunteer Interest Session",
    date: "2025-09-28",
    time: "3:00 PM - 4:00 PM ET",
    description:
      "Get Involved! The need to push back on Christian Nationalism is RIGHT NOW and we need your help. Contact Vivian Combs (vivian.combs@rfindiana.org) to register and learn more about what we're planning and how you can help. Hosted by Religious Freedom Indiana.",
    location: "Zoom",
    registrationLink:
      "https://us06web.zoom.us/meeting/register/V7TgEp0JTkiPb6h9qwofCQ",
  },
];

export const virtualMeetings: Meeting[] = [
  {
    title: "How to End Christian Nationalism",
    host: "Dr. Steve Ivy",
    description: "Dr. Steve Ivy facilitates this book  study. Steve is Baptist clergy, a retired hospital chaplain, and seminary professor. For further information regarding the study, contact him at Steven.ivy@rfindiana.org.",
    times: "Monthly on fourth Tuesday, 7:00 PM ET",
    registrationLink: "https://us06web.zoom.us/meeting/register/7D4LXKJVTgy0kAfyzrbNbg"
  }
];

export const physicalMeetings: Meeting[] = [
  {
    title: "Christians Against Christian Nationalism Study Group",
    host: "First Baptist Church of Indianapolis",
    description: "8600 N. College Ave. For further information contact Steven Ivy, Steven.ivy@rfindiana.org",
    times: "Monthly on second Tuesday, 7:00-8:30pm",
    registrationLink: undefined
  }
];

export const pastEvents: PastEvent[] = [
  {
    title: "Andrew Whitehead: Christian Nationalism",
    date: "2025-07-09",
    time: "5:30 PM ET",
    description: "Dinner at 5:30 PM, program begins at 6:00 PM. Speaker: Andrew Whitehead, author of American Idolatry. The public is welcome! Please call (317) 861-0977 to RSVP.",
    location: "Cross of Grace Lutheran Church, 3519 S. 600 W., New Palestine, IN 46163"
  },
  {
    title: "Brainstorming session",
    date: "2025-07-07",
    time: "7:00 PM ET",
    description: "As a new state-wide organization, we are still forming action plans to confront Christian nationalism. Join us on July 7th as we discuss next steps to achieve each of our goals:\n\n-   Educate the public\n-   Counter harmful disinformation\n-   Defend individuals and communities\n-   Foster dialogue across beliefs\n-   Inspire action and advocacy\n\nBring your ideas and show up on Zoom!",
    location: "Zoom Meeting"
  },
  {
    title: "The Threat of Christian Nationalism and What We Can Do About It",
    date: "2025-07-01",
    time: "7:00 PM ET",
    description: "Speaker: Andrew Whitehead, author of American Idolatry: How Christian Nationalism Betrays the Gospel and Threatens the Church",
    location: "Zionsville Christian Church, 120 N. 9th St., Zionsville, IN 46077"
  },
  {
    title: "Book Study: American Idolatry",
    date: "2025-06-25",
    time: "11:30 AM - 1:00 PM & 7:00 PM - 8:30 PM",
    description: "How Christian Nationalism Betrays the Gospel and Threatens the Church",
    location: "Cross of Grace Lutheran Church, New Palestine, IN"
  },
  {
    title: "Chat w/Dale",
    date: "May 12 - June 2, 2025",
    time: "6:00 PM ET",
    description: "Get-acquainted and general discussion series. Dale wanted to hear what you think.",
    location: "Zoom Meeting"
  },
  {
    title: "Faithful America: Christian Nationalism & Local Action Groups",
    date: "2025-06-05",
    time: "6:00 PM ET",
    description: "WEBINAR: Discussion about resisting Christian nationalism by Faithful America's Executive Director and Digital Community Organizer",
    location: "Zoom Meeting"
  },
  {
    title: "General Meeting (Virtual)",
    date: "2025-05-18",
    time: "2:00 PM ET",
    description: "Monthly organizational meeting",
    location: "Virtual"
  },
  {
    title: "General Meeting (Virtual)",
    date: "2025-04-13", 
    time: "2:00 PM ET",
    description: "Monthly organizational meeting",
    location: "Virtual"
  }
];
