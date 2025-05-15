import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../Assets/css/subcategory.css';
import EventSubCard from '../components/EventSubCard';
import Pagination from '../components/Pagination';

const SubCategoryEvents = () => {
  const { category } = useParams();
  const location = useLocation();
  const eventData = location.state?.eventData || {};
  
  // Sample data for subcategory events - in a real app, you would fetch this based on the category
  const allSubCategoryEvents = [
    {
      id: 201,
      title: 'Modern Art Showcase',
      image: 'https://via.placeholder.com/300x200',
      category: 'Art & Culture',
      date: 'June 22, 2025',
      location: 'City Gallery - Exhibition Hall A',
      price: '$15',
      description: 'Explore contemporary art pieces from emerging artists around the world.',
      tickets_available: 75
    },
    {
      id: 202,
      title: 'Classical Art Tour',
      image: 'https://via.placeholder.com/300x200',
      category: 'Art & Culture',
      date: 'June 25, 2025',
      location: 'City Gallery - Main Hall',
      price: '$12',
      description: 'Guided tour through the classical art collection with expert commentary.',
      tickets_available: 30
    },
    {
      id: 203,
      title: 'Interactive Art Workshop',
      image: 'https://via.placeholder.com/300x200',
      category: 'Art & Culture',
      date: 'June 28, 2025',
      location: 'City Gallery - Workshop Space',
      price: '$25',
      description: 'Create your own art with guidance from professional artists.',
      tickets_available: 20
    },
    {
      id: 204,
      title: 'Photography Exhibition',
      image: 'https://via.placeholder.com/300x200',
      category: 'Art & Culture',
      date: 'July 1, 2025',
      location: 'City Gallery - East Wing',
      price: '$10',
      description: 'Award-winning photographs from around the globe.',
      tickets_available: 100
    },
    // {
    //   id: 205,
    //   title: 'Sculpture Garden Tour',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Art & Culture',
    //   date: 'July 3, 2025',
    //   location: 'City Gallery - Outdoor Garden',
    //   price: '$8',
    //   description: 'Walk through our beautiful sculpture garden featuring works from renowned artists.',
    //   tickets_available: 50
    // },
    // {
    //   id: 206,
    //   title: 'Art History Lecture',
    //   image: 'https://via.placeholder.com/300x200',
    //   category: 'Art & Culture',
    //   date: 'July 5, 2025',
    //   location: 'City Gallery - Lecture Hall',
    //   price: '$5',
    //   description: 'Professor Smith discusses the evolution of modern art in the 21st century.',
    //   tickets_available: 80
    // },
    // Sports category events
    {
      id: 301,
      title: 'Marathon Training Session',
      image: 'https://via.placeholder.com/300x200',
      category: 'Sports',
      date: 'July 1, 2025',
      location: 'City Park Track',
      price: '$10',
      description: 'Professional trainers will help you prepare for the upcoming marathon.',
      tickets_available: 50
    },
    {
      id: 302,
      title: 'Marathon Prep Workshop',
      image: 'https://via.placeholder.com/300x200',
      category: 'Sports',
      date: 'July 2, 2025',
      location: 'Sports Complex',
      price: '$15',
      description: 'Learn nutrition, pacing, and recovery strategies for marathon runners.',
      tickets_available: 40
    },
    
    
    // Add more sample events for other categories as needed
  ];

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('date-asc');
  const eventsPerPage = 6;

  // Filter events based on the category and search term
  const filteredEvents = allSubCategoryEvents.filter(event => {
    const matchesCategory = !category || event.category === category;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
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
      case 'price-asc':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-desc':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
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

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <div className="subcategory-events-page">
      {/* Page Header */}
      <div className="subcategory-header">
        <div className="container">
          <h1 className="subcategory-title">{category || 'Category'} Events</h1>
          {eventData.title && (
            <p className="subcategory-description">
              Events related to {eventData.title}
            </p>
          )}
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="subcategory-filter-section">
        <div className="container">
          <div className="subcategory-filter-container">
            {/* Search and sort */}
            <div className="subcategory-search-sort-container">
              <div className="subcategory-search-bar">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <i className="fas fa-search"></i>
              </div>
              <div className="subcategory-sort-dropdown">
                <select value={sortOrder} onChange={handleSortChange}>
                  <option value="date-asc">Date (Nearest First)</option>
                  <option value="date-desc">Date (Furthest First)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Display Section */}
      <div className="subcategory-events-display-section">
        <div className="container">
          <div className="subcategory-results-info">
            <p>Showing {currentEvents.length} of {filteredEvents.length} results</p>
          </div>

          {currentEvents.length > 0 ? (
            <div className="subcategory-events-grid">
              {currentEvents.map(event => (
                <EventSubCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="subcategory-no-results">
              <h3>No events found</h3>
              <p>Try adjusting your search term</p>
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

export default SubCategoryEvents;