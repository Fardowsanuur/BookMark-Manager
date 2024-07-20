import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteBookmark } from '../MockData';

const BookmarkTable = ({ bookmarks: initialBookmarks }) => {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookmarkToDelete, setBookmarkToDelete] = useState(null);

  useEffect(() => {
    setBookmarks(initialBookmarks);
  }, [initialBookmarks]);

  const handleDelete = (bookmark) => {
    setBookmarkToDelete(bookmark);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    await deleteBookmark(bookmarkToDelete.id);
    setBookmarks(bookmarks.filter(b => b.id !== bookmarkToDelete.id));
    setShowDeleteModal(false);
    setBookmarkToDelete(null);
  };

  const cancelDelete = () => {
    setBookmarkToDelete(null);
    setShowDeleteModal(false);
  };

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <div className="p-4 text-center text-gray-700 dark:text-gray-300">
        No bookmarks available.
      </div>
    );
  }

  return (
    <div>
      <table id="crudTable" className="min-w-full bg-white dark:bg-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookmarks.map((bookmark) => (
            <tr key={bookmark.id} className="border-b dark:border-gray-600">
              <td className="px-4 py-2">{bookmark.id}</td>
              <td className="px-4 py-2">{bookmark.title}</td>
              <td className="px-4 py-2">{bookmark.url}</td>
              <td className="px-4 py-2">{bookmark.description}</td>
              <td className="px-4 py-2">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => window.open(bookmark.url, '_blank')}
                    className="inline-flex items-center text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0110.5 0z" />
                    </svg>
                    Preview
                  </button>
                  <Link to={`/edit/${bookmark.id}`} className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1">
                    <svg aria-hidden="true" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(bookmark)}
                    className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeleteModal && (
        <div id="deleteModal" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={cancelDelete}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <svg className="text-red-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
              <div className="flex justify-center items-center space-x-4">
                <button type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600" onClick={cancelDelete}>No, cancel</button>
                <button type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-900" onClick={confirmDelete}>Yes, I'm sure</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarkTable;
