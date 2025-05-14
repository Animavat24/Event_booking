import React, { useState } from 'react';
import '../Assets/css/Events.css';
import EventCard from '../components/EventCards';
import Pagination from '../components/Pagination';

const UpcomingEvents = () => {
  // Sample data for upcoming events
  const allUpcomingEvents = [
    {
      id: 101,
      title: 'Art Exhibition',
      image: 'https://via.placeholder.com/300x200',
      category: 'Art & Culture',
      date: 'June 20, 2025',
      location: 'City Gallery'
    },
    {
      id: 102,
      title: 'Marathon 2025',
      image: 'https://via.placeholder.com/300x200',
      category: 'Sports',
      date: 'July 5, 2025',
      location: 'City Center'
    },
    // {
    //   id: 103,
    //   title: 'Business Workshop',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Business',
    //   date: 'July 15, 2025',
    //   location: 'Business Hub'
    // },
    // {
    //   id: 104,
    //   title: 'Yoga Retreat',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Wellness',
    //   date: 'August 10, 2025',
    //   location: 'Sunset Beach'
    // },
    // {
    //   id: 105,
    //   title: 'Tech Summit',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Technology',
    //   date: 'August 22, 2025',
    //   location: 'Innovation Center'
    // },
    // {
    //   id: 106,
    //   title: 'Comedy Night',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Entertainment',
    //   date: 'September 5, 2025',
    //   location: 'Laugh Factory'
    // },
    // {
    //   id: 107,
    //   title: 'Wine Tasting Festival',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Food & Drink',
    //   date: 'September 12, 2025',
    //   location: 'Vineyard Gardens'
    // },
    // {
    //   id: 108,
    //   title: 'Book Fair',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Education',
    //   date: 'September 25, 2025',
    //   location: 'Central Library'
    // },
    // {
    //   id: 109,
    //   title: 'Music Concert',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Music',
    //   date: 'October 8, 2025',
    //   location: 'Grand Arena'
    // },
    // {
    //   id: 110,
    //   title: 'Fashion Week',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Fashion',
    //   date: 'October 15, 2025',
    //   location: 'Design Center'
    // },
    // {
    //   id: 111,
    //   title: 'Science Symposium',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Education',
    //   date: 'October 20, 2025',
    //   location: 'University Hall'
    // },
    // {
    //   id: 112,
    //   title: 'Film Festival',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Entertainment',
    //   date: 'November 5, 2025',
    //   location: 'Cinema Complex'
    // }
  ];

  // List of unique categories for filtering
  const categories = ['All', ...new Set(allUpcomingEvents.map(event => event.category))];

  // State management
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('date-asc'); // default sorting by date ascending
  const eventsPerPage = 8;

  // Filter events based on category and search term
  const filteredEvents = allUpcomingEvents.filter(event => {
    const matchesCategory = filteredCategory === 'All' || event.category === filteredCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date.split(', ')[0].replace(/(January|February|March|April|May|June|July|August|September|October|November|December)/g, match => {
      const months = {'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5, 'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11};
      return months[match];
    }));
    const dateB = new Date(b.date.split(', ')[0].replace(/(January|February|March|April|May|June|July|August|September|October|November|December)/g, match => {
      const months = {'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5, 'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11};
      return months[match];
    }));
    
    switch (sortOrder) {
      case 'date-asc':
        return dateA - dateB;
      case 'date-desc':
        return dateB - dateA;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      default:
        return dateA - dateB;
    }
  });

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="upcoming-events-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Current Events</h1>
          <p className="page-description">
            Discover and book tickets for the most anticipated events coming soon
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="filter-section">
        <div className="container">
          <div className="filter-container">
            {/* Category filter */}
            <div className="category-filter">
              <h3>Categories</h3>
              <div className="category-buttons">
                {categories.map((category, index) => (
                  <button 
                    key={index} 
                    className={`category-btn ${filteredCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search and sort */}
            <div className="search-sort-container">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search by title or location..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <i className="fas fa-search"></i>
              </div>
              <div className="sort-dropdown">
                <select value={sortOrder} onChange={handleSortChange}>
                  <option value="date-asc">Date (Nearest First)</option>
                  <option value="date-desc">Date (Furthest First)</option>
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Display Section */}
      <div className="events-display-section">
        <div className="container">
          <div className="results-info">
            <p>Showing {currentEvents.length} of {filteredEvents.length} results</p>
          </div>

          {currentEvents.length > 0 ? (
            <div className="events-grid">
              {currentEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No events found</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          )}

          {/* Pagination */}
          {filteredEvents.length > eventsPerPage && (
            <Pagination 
              eventsPerPage={eventsPerPage} 
              totalEvents={filteredEvents.length} 
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;