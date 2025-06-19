export interface OnlineResource {
  name: string;
  website: {
    url: string;
    text: string;
  };
  focus: string;
  additionalInfo: string;
}

export const onlineResources: OnlineResource[] = [
  {
    name: "Americans United for Separation of Church and State (AU)",
    website: {
      url: "https://www.au.org",
      text: "www.au.org",
    },
    focus:
      "A nonpartisan legal, educational and advocacy organization that protects the right of everyone to believe as they want.",
    additionalInfo: `Their Indiana chapter:<br />Hoosiers for Separation of Church and State<br />Fort Wayne, Indiana<br /><a href="mailto:hfsocas@uufortwayne.org" class="text-primary hover:text-primary-dark underline">hfsocas@uufortwayne.org</a>`,
  },
  {
    name: "Baptist Joint Committee for Religious Liberty (BJC)",
    website: {
      url: "https://www.bjconline.org",
      text: "www.bjconline.org",
    },
    focus:
      "Advocacy and activism in support of religious liberty including extensive legal work.",
    additionalInfo:
      "Amanda Tyler, E.D., How to End Christian Nationalism.<br />Founding sponsor of Christians Against Christian Nationalism.",
  },
  {
    name: "Baptist News Global",
    website: {
      url: "https://www.baptistnews.com",
      text: "www.baptistnews.com",
    },
    focus: "Daily news and opinion pieces.",
    additionalInfo:
      "Covers well the territory of religious liberty. Other foci center on Baptist people and events worldwide.",
  },
  {
    name: "Christians Against Christian Nationalism",
    website: {
      url: "https://www.christiansagainstchristiannationalism.org",
      text: "www.christiansagainstchristiannationalism.org",
    },
    focus:
      "A grassroots campaign to resist Christian nationalism through awareness, advocacy, and local organizing.",
    additionalInfo: `On landing page click on "Resources" for substantive information and guidance.`,
  },
  {
    name: "The Convocation",
    website: {
      url: "https://convocation.substack.com/about",
      text: "On Substack and YouTube",
    },
    focus:
      "3 historians and a sociologist reflect on national and international events related to Christian nationalism and religious liberty.",
    additionalInfo:
      "Diana Butler Bass<br />Robert Jones<br />Kristin Du Mez<br />Jemar Tisby",
  },
  {
    name: "Faithful America",
    website: {
      url: "https://act.faithfulamerica.org",
      text: "https://act.faithfulamerica.org",
    },
    focus:
      "An independent, interdenominational Christian organization. They are active in many causes, including working against Christian nationalism.",
    additionalInfo: `See especially <a href="https://act.faithfulamerica.org/signup/christian-nationalism-resources/" target="_blank" class="text-primary hover:text-primary-dark underline">this resource page</a> for extensive resources in print and online formats.`,
  },
  {
    name: "Vote Common Good",
    website: {
      url: "https://www.votecommongood.com",
      text: "https://www.votecommongood.com",
    },
    focus:
      "Vote Common Good is inspiring, energizing, and mobilizing people of faith to make the common good their voting criteria. VCG trains and supports candidates to connect with Evangelical and Catholic voters.",
    additionalInfo: `This site hosts a video based training program for faith communities and leaders, "Confronting Christian Nationalism."<br /><a href="https://www.votecommongood.com/confronting-christian-nationalism-curriculum/" target="_blank" class="text-primary hover:text-primary-dark underline">Confronting Christian Nationalism Curriculum</a>`,
  },
  {
    name: "Word and Way",
    website: {
      url: "https://publicwitness.wordandway.org",
      text: "publicwitness.wordandway.org",
    },
    focus:
      "A Public Witness is a newsletter from Word & Way, a Christian media company publishing since 1896. A Public Witness provides insights from professional experience in academia, advocacy, congregational leadership, and political campaigns. The longform journalism published here helps you understand what's missed by misleading tweets and headlines.",
    additionalInfo:
      "Brian Taylor, co-author of Baptizing America, is editor-in-chief.",
  },
];
