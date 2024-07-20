// src/Components/CreateBookmark.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBookmark } from '../MockData'; // Assuming addBookmark function is implemented to add a new bookmark.

const CreateBookmark = () => {
  // State variables for form inputs, errors, and modal state.
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [urlError, setUrlError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // React Router navigation hook.
  const navigate = useNavigate();

  // Form validation function.
  const validateForm = () => {
    let valid = true;
    setTitleError('');
    setUrlError('');
    if (!title) {
      setTitleError('Bookmark title is required');
      valid = false;
    }
    if (!url) {
      setUrlError('Bookmark URL is required');
      valid = false;
    }
    return valid;
  };

  // Form submit handler.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBookmark = { title, url, description };
      addBookmark(newBookmark); // Assuming addBookmark is a function that adds a bookmark (not defined here).
      setTitle('');
      setUrl('');
      setDescription('');
      setIsModalOpen(true); // Open success modal after adding bookmark.
    }
  };

  // Close modal and navigate back to home page.
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  // Cancel adding bookmark and navigate back to home page.
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Bookmark</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Bookmark title input */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bookmark title</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                className={`bg-gray-50 border ${titleError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} 
                placeholder="Type bookmark title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
            </div>
            {/* Bookmark URL input */}
            <div className="w-full">
              <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bookmark URL</label>
              <input 
                type="text" 
                name="url" 
                id="url" 
                className={`bg-gray-50 border ${urlError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} 
                placeholder="Bookmark URL" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
            </div>
            {/* Bookmark description textarea */}
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bookmark Description</label>
              <textarea 
                id="description" 
                rows="8" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="Your description here" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* Form action buttons */}
          <div className="flex space-x-4 mt-4 sm:mt-6">
            {/* Submit button */}
            <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-green-600">
              Add Bookmark
            </button>
            {/* Cancel button */}
            <button type="button" onClick={handleCancel} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Success modal */}
      {isModalOpen && (
        <div id="successModal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              {/* Close button */}
              <button type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModal}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {/* Success icon */}
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Success</span>
              </div>
              {/* Success message */}
              <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Bookmark added successfully.</p>
              {/* Continue button */}
              <button onClick={closeModal} type="button" className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreateBookmark;
