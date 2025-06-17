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
}

export const upcomingEvents: Event[] = [
  {
    title: "Faithful America: Christian Nationalism & Local Action Groups",
    date: "2025-06-05",
    time: "6:00 PM ET",
    description: "WEBINAR: Join Faithful America and Religious Freedom Indiana for a discussion about resisting Christian nationalism by Faithful America's Executive Director, the Rev. Dr. Shannon Fleck, and Rev. Hunter Green, Digital Community Organizer. The Rev. Dr. Shannon Fleck, Faithful America's new Executive Director, and Rev. Hunter Green, Digital Community Organizer, will present on Christian nationalism and their new local action groups via Zoom.",
    location: "Zoom Meeting",
    registrationLink: "https://us06web.zoom.us/meeting/register/Fyz9o7KLSbuvPwORe6YDJQ#/registration"
  }
];

export const virtualMeetings: Meeting[] = [
  {
    title: "Chat w/Dale",
    host: "Dale Brubaker",
    description: "Get-acquainted and/or general discussion. I want to hear what you think.",
    times: "Mondays May 12 - June 2 at 6:00 PM",
    registrationLink: "https://us06web.zoom.us/meeting/register/uf2e2xroR_KciIQpbwH_xg#/registration"
  }
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
    title: "General Meeting (Virtual)",
    date: "2025-05-18",
    time: "2:00 PM ET"
  },
  {
    title: "General Meeting (Virtual)",
    date: "2025-04-13", 
    time: "2:00 PM ET"
  }
];