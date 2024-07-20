// src/MockData.js

// Mock data array containing initial bookmarks
let mockBookmarks = [
  { id: 1, title: "Google", url: "https://www.google.com", description: "Search engine" },
  { id: 2, title: "Facebook", url: "https://www.facebook.com", description: "Social media platform" },
  { id: 3, title: "Twitter", url: "https://www.twitter.com", description: "Microblogging platform" },
];

// Initialize nextId to generate unique IDs for new bookmarks
let nextId = mockBookmarks.length + 1;

// Function to add a new bookmark
export const addBookmark = (bookmark) => {
  return new Promise((resolve) => {
    bookmark.id = nextId++;
    mockBookmarks.push(bookmark); // Add the new bookmark to the mockBookmarks array
    resolve(bookmark);
  });
};

// Function to retrieve a bookmark by ID
export const getBookmarkById = (id) => {
  return new Promise((resolve) => {
    const bookmark = mockBookmarks.find(b => b.id === parseInt(id)); // Find the bookmark with the specified ID
    resolve(bookmark);
  });
};

// Function to delete a bookmark by ID
export const deleteBookmark = (id) => {
  return new Promise((resolve) => {
    mockBookmarks = mockBookmarks.filter(bookmark => bookmark.id !== parseInt(id)); // Filter out the bookmark with the specified ID
    resolve();
  });
};

// Function to update a bookmark by ID with new data
export const updateBookmark = (id, updatedBookmark) => {
  return new Promise((resolve) => {
    mockBookmarks = mockBookmarks.map(bookmark =>
      bookmark.id === parseInt(id) ? { ...bookmark, ...updatedBookmark } : bookmark // Update the bookmark with the specified ID
    );
    resolve();
  });
};

export { mockBookmarks as default }; // Export mockBookmarks as the default export
