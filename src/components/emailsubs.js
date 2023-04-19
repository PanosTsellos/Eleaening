import React, { useState, useEffect } from 'react';
import Emailinfo from './emailinfo';
import Footer from './footer';
function EmailSubmissions() {
    const [IsLoading, setIsLoading] = useState(true);
    const [submissions, setSubmissions] = useState([]);


    useEffect( () => {
        setIsLoading(true);
        fetch("http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/contactinfo")
        .then(
            (response) => response.json()
        )
        .then(
            (json) => {
                setSubmissions(json.data)
                setIsLoading(false)
            }
        )
        .catch(
            (e) => {
                console.log(e.message)
            }
        )
      },[]);

  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(10);
  const [sortOption, setSortOption] = useState('a-z');
  const [currentPage, setCurrentPage] = useState(1);

  const searchSubmissions = (value) => {
    const sr = value.name + ' ' + value.message + ' ' + value.email ;
    return sr.toLowerCase().includes(searchTerm.toLowerCase()) || value.message.toLowerCase().includes(searchTerm.toLowerCase());
  };

 

  const onChange = (mail) => {
    setSearchTerm(mail.target.value);
  };
  
  
  const sortSubmissions = (a, b) => {
    switch (sortOption) {
      case 'a-z':
        return a.name.localeCompare(b.name);
      case 'z-a':
        return b.name.localeCompare(a.name);
      case 'newest':
        return new Date(b.created_at) - new Date(a.created_at);
      case 'oldest':
        return new Date(a.created_at) - new Date(b.created_at);
      default:
        return 0;
    }
  };

  const filteredSubmissions = submissions.filter(searchSubmissions).sort(sortSubmissions);

  const totalPages = Math.ceil(filteredSubmissions.length / limit);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visibleSubmissions = filteredSubmissions.slice((currentPage - 1) * limit, currentPage * limit);

  const allSubmissions = visibleSubmissions.map((value, key) => (
    <section key={key}>
      <Emailinfo data={value} />
    </section>
  ));

  return (
      <div className="Data">
        <h1 className='tlt'>Email Submissions:</h1>
        
      
      
      <div><strong>Search:</strong></div>
        <input className='search'  value={searchTerm} onChange={onChange} placeholder="Search"/>
       <br/>
       
       <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
  <div><strong>Sort by:</strong></div>
 
  <select className='sl' value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
    <option value="newest">Newest to Oldest</option>
    <option value="oldest">Oldest to Newest</option>
    <option value="a-z">A-Z</option>
    <option value="z-a">Z-A</option>
  </select>
</div>



        {IsLoading && <p>Loading...</p>}
        {allSubmissions}
        {!IsLoading && (
          <div>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            {pageNumbers.map((page) => (
        <button className={currentPage === page ? 'page-button current-page' : 'page-button'} key={page} onClick={() => setCurrentPage(page)} disabled={page === currentPage}>
         {page}
         </button>
        ))}

            
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
                <Footer></Footer>

      </div>
  );
}

export default EmailSubmissions;