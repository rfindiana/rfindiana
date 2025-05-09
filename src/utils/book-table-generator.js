// Books with their details
const books = [
  {
    date: "2025-02",
    author: "Katherine Stewart",
    title: "Money, Lies, and God: Inside the Movement to Destroy American Democracy",
    link: ""
  },
  {
    date: "2024-10",
    author: "Amanda Tyler",
    title: "How to End Christian Nationalism",
    link: "https://www.broadleafbooks.com/store/product/9781506498287/How-to-End-Christian-Nationalism"
  },
  {
    date: "2024-09",
    author: "Taylor, Matthew D.",
    title: "The Violent Take it by Force",
    link: "https://icjs.org/the-violent-take-it-by-force/"
  },
  {
    date: "2024-07",
    author: "Drew J. Strait",
    title: "Strange Worship",
    link: "https://www.drewstrait.com/"
  },
  {
    date: "2024-06",
    author: "Brian Kaylor & Beau Underwood",
    title: "Baptizing America: How Mainline Protestants Helped Build Christian Nationalism",
    link: ""
  },
  {
    date: "2024-04",
    author: "Jim Wallis",
    title: "The False White Gospel",
    link: ""
  },
  {
    date: "2023-10",
    author: "David Gushee",
    title: "Defending Democracy from Its Christian Enemies",
    link: ""
  },
  {
    date: "2023-09",
    author: "Robert P. Jones",
    title: "The Hidden Roots of White Supremacy and the Path to a Shared American Future",
    link: ""
  },
  {
    date: "2023-08",
    author: "Andrew Whitehead",
    title: "American Idolatry: How Christian Nationalism Betrays the Gospel and Threatens the Church",
    link: ""
  },
  {
    date: "2021-02",
    author: "Anthea Butler",
    title: "White Evangelical Racism: The Politics of Racism in America",
    link: ""
  },
  {
    date: "2020-07",
    author: "Robert P. Jones",
    title: "White Too Long: The Legacy of White Supremacy in American Christianity",
    link: ""
  },
  {
    date: "2020-06",
    author: "Kristin Kobes Du Mez",
    title: "Jesus and John Wayne - How White Evangelicals Corrupted a Faith and Fractured a Nation",
    link: "https://kristindumez.com/books/jesus-and-john-wayne/"
  },
  {
    date: "2020-03",
    author: "Andrew L. Whitehead & Samuel L. Perry",
    title: "Taking America Back for God: Christian Nationalism in the United States",
    link: "https://readingreligion.org/9780190057886/"
  },
  {
    date: "2018-05",
    author: "John Meachum",
    title: "The Soul of America",
    link: ""
  },
];

// Generate the table rows markup
let tableRows = '';

books.forEach(book => {
  const moreCellContent = book.link ? 
    `<a href="${book.link}" target="_blank" class="text-primary hover:text-primary-dark">More Info</a>` : 
    '<!-- Empty cell, no info link available -->';
    
  tableRows += `
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900">${book.date}</td>
              <td class="px-4 py-2 text-sm text-gray-900">${book.author}</td>
              <td class="px-4 py-2 text-sm text-gray-900"
                >${book.title}</td
              >
              <td class="px-4 py-2 text-sm">
                ${moreCellContent}
              </td>
            </tr>`;
});

console.log('Here\'s the updated table markup you can use:');
console.log(tableRows);
