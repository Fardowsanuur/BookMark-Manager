// src/Components/EditBookmark.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookmarkById, updateBookmark } from '../MockData';

const EditBookmark = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookmark, setBookmark] = useState({ title: '', url: '', description: '' });
  const [titleError, setTitleError] = useState('');
  const [urlError, setUrlError] = useState('');

  useEffect(() => {
    const fetchBookmark = async () => {
      const result = await getBookmarkById(id);
      setBookmark(result);
    };
    fetchBookmark();
  }, [id]);

  const validateForm = () => {
    let valid = true;
    setTitleError('');
    setUrlError('');
    if (!bookmark.title) {
      setTitleError('Bookmark title is required');
      valid = false;
    }
    if (!bookmark.url) {
      setUrlError('Bookmark URL is required');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      updateBookmark(id, bookmark);
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookmark((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit Bookmark</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bookmark title</label>
              <input 
                type="text" 
                name="title" 
                id="title" 
                className={`bg-gray-50 border ${titleError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} 
                placeholder="Type bookmark title" 
                value={bookmark.title}
                onChange={handleChange}
              />
              {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
            </div>
            <div className="w-full">
              <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bookmark URL</label>
              <input 
                type="text" 
                name="url" 
                id="url" 
                className={`bg-gray-50 border ${urlError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} 
                placeholder="Bookmark URL" 
                value={bookmark.url}
                onChange={handleChange}
              />
              {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bookmark Description</label>
              <textarea 
                name="description"
                id="description" 
                rows="8" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="Your description here" 
                value={bookmark.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-6">
            <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-green-600">
              Update
            </button>
            <button type="button" onClick={handleCancel} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditBookmark;
