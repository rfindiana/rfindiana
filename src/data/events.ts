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
  // Add future events here - use exampleEvents above as template
];

export const virtualMeetings: Meeting[] = [
  // Add future virtual meetings here
];

export const physicalMeetings: Meeting[] = [
  {
    title: "Book Study: American Idolatry",
    host: "Cross of Grace Lutheran Church, New Palestine, IN",
    description: "How Christian Nationalism Betrays the Gospel and Threatens the Church",
    times: "Wednesdays, June 4-25, 11:30 AM - 1:00 PM & 7:0 PM - 8:30 PM"
  }
];

export const pastEvents: PastEvent[] = [
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