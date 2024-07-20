// src/MockData.js
let mockBookmarks = [
  { id: 1, title: "Google", url: "https://www.google.com", description: "Search engine" },
  { id: 2, title: "Facebook", url: "https://www.facebook.com", description: "Social media platform" },
  { id: 3, title: "Twitter", url: "https://www.twitter.com", description: "Microblogging platform" },
];

let nextId = mockBookmarks.length + 1;

export const addBookmark = (bookmark) => {
  return new Promise((resolve) => {
    bookmark.id = nextId++;
    mockBookmarks.push(bookmark);
    resolve(bookmark);
  });
};

export const getBookmarkById = (id) => {
  return new Promise((resolve) => {
    const bookmark = mockBookmarks.find(b => b.id === parseInt(id));
    resolve(bookmark);
  });
};

export const deleteBookmark = (id) => {
  return new Promise((resolve) => {
    mockBookmarks = mockBookmarks.filter(bookmark => bookmark.id !== parseInt(id));
    resolve();
  });
};

export const updateBookmark = (id, updatedBookmark) => {
  return new Promise((resolve) => {
    mockBookmarks = mockBookmarks.map(bookmark =>
      bookmark.id === parseInt(id) ? { ...bookmark, ...updatedBookmark } : bookmark
    );
    resolve();
  });
};

export { mockBookmarks as default };
