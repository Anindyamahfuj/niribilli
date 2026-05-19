// script.js - Complete with 20+ destinations and working images in search results
document.addEventListener('DOMContentLoaded', function() {

  // ========== 20+ DESTINATIONS DATABASE WITH WORKING IMAGES ==========
  const destinations = [
    { name: "Cox's Bazar", region: "Chittagong", price: 11000, image: "https://media.istockphoto.com/id/1214282986/photo/most-beautiful-paddy-land-along-the-worlds-longest-stretch-of-beach-coxs-bazar-bangladesh.jpg?s=612x612&w=0&k=20&c=9cdaWwYHRRjU0ELX8vS6q9cIwiuXdfaxSBlRdJav20I=", description: "World's longest natural sea beach with golden sands" },
    { name: "Sundarbans", region: "Khulna", price: 14500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ-ThwJ7Ya5aBOLO0QQp2Bn8cY41oo0xs5Q&s", description: "Mangrove forest & Royal Bengal Tiger sanctuary" },
    { name: "Sylhet", region: "Sylhet", price: 9000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapOzM07Vd9Y-wkZ_r4a8k95E8wh2vT6Ch_g&s", description: "Rolling tea estates & misty hills" },
    { name: "Bandarban", region: "Chittagong Hill Tracts", price: 12000, image: "https://www.shutterstock.com/image-photo/bandarban-place-immense-natural-beauty-600nw-2303570883.jpg", description: "Hill tracts, Nilgiri mountains & indigenous culture" },
    { name: "Sajek Valley", region: "Rangamati", price: 13500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Tf7zVXBHJHlSCwnrqrCt9I0x3UCLHLBwqA&s", description: "Cloud-kissing hills & serene landscapes" },
    { name: "Rangamati", region: "Chittagong Hill Tracts", price: 10500, image: "https://thefe-bd.sgp1.cdn.digitaloceanspaces.com/posts/12659/7a.jpg", description: "Kaptai Lake & tribal handicrafts" },
    { name: "St. Martin's Island", region: "Bay of Bengal", price: 16000, image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Coral island & blue waters" },
    { name: "Kuakata Beach", region: "Barisal", price: 9500, image: "https://traveltips.ezyro.com/wp-content/uploads/2023/03/Attractive-places-in-Kuakata.jpg", description: "Where sun rises and sets over the sea" },
    { name: "Srimangal", region: "Sylhet", price: 8500, image: "https://www.digitalit-inst.com/dm/wp-content/uploads/2023/12/Sreemangaltour.jpg", description: "Tea capital & Lawachara rainforest" },
    { name: "Paharpur", region: "Naogaon", price: 8000, image: "https://media-cdn.tripadvisor.com/media/photo-s/04/c3/86/03/paharpur-buddhist-monastery.jpg", description: "UNESCO Buddhist Vihara" },
    { name: "Mahasthangarh", region: "Bogra", price: 7500, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0b/b6/b8/mahasthangarh-bengali.jpg?w=700&h=700&s=1", description: "Ancient city ruins from 3rd century BC" },
    { name: "Sonargaon", region: "Dhaka", price: 6500, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e6/95/9b/new-look-of-sonarga-after.jpg?w=900&h=500&s=1", description: "Old capital & folk art museum" },
    { name: "Bagerhat", region: "Khulna", price: 8500, image: "https://thumbs.dreamstime.com/b/sixty-dome-mosque-shat-gombuj-masjid-bagerhat-bangladesh-455124579.jpg", description: "Sixty Dome Mosque (UNESCO)" },
    { name: "Jaflong", region: "Sylhet", price: 9000, image: "https://grandsylhet.com/wp-content/uploads/2025/04/Panthumai-Waterfall-2k-768x403.webp", description: "Stone collection & Dawki river view" },
    { name: "Ratargul", region: "Sylhet", price: 8000, image: "https://static.wixstatic.com/media/b9965b_f870463851e049dba796d9ea354cb29e~mv2.jpg/v1/fill/w_568,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b9965b_f870463851e049dba796d9ea354cb29e~mv2.jpg", description: "Freshwater swamp forest" },
    { name: "Nijhum Dwip", region: "Noakhali", price: 10500, image: "https://www.touristplaces.com.bd/images/bp/p2297swa.jpeg", description: "Deer island & mangrove forest" },
    { name: "Lawachara", region: "Sylhet", price: 7500, image: "https://www.laurewanders.com/wp-content/uploads/2023/02/Lawachara-National-Park-11.jpg", description: "Rainforest & gibbon sanctuary" },
    { name: "Tanguar Haor", region: "Sunamganj", price: 11500, image: "https://www.travelmate.com.bd/wp-content/uploads/2019/06/Tanguar-Haor-Sunamganj-1024x683.jpg.webp", description: "Ramsar wetland & migratory birds" },
    { name: "Bisanakandi", region: "Sylhet", price: 9000, image: "https://dailyasianage.com/library/15188042912fe461ed0167f58559527e680f93dc08.jpg", description: "Border view with India & rocky streams" },
    { name: "Madhabkunda", region: "Moulvibazar", price: 7500, image: "https://dailyasianage.com/library/1611944844Madhabkunda_waterfall_Nhasive2-626x365.jpg", description: "Waterfall & lush greenery" }
  ];

  // ========== RENDER DESTINATIONS ON DESTINATIONS PAGE ==========
  function renderDestinations(filterText = '') {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;
    
    const filtered = destinations.filter(d => 
      d.name.toLowerCase().includes(filterText.toLowerCase()) || 
      d.region.toLowerCase().includes(filterText.toLowerCase()) ||
      d.description.toLowerCase().includes(filterText.toLowerCase())
    );
    
    const statsDiv = document.getElementById('searchStats');
    if (statsDiv) {
      statsDiv.innerHTML = `<p style="text-align:center;">✨ Found ${filtered.length} amazing destinations</p>`;
    }
    
    if (filtered.length === 0) {
      grid.innerHTML = `<div style="text-align:center; padding:60px;">🌿 No destinations match. Try searching for "beach", "hill", or "Sylhet"</div>`;
      return;
    }
    
    grid.innerHTML = filtered.map(dest => `
      <div class="dest-card" data-name="${dest.name}" data-price="${dest.price}">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400/e67e22/white?text=${encodeURIComponent(dest.name)}'">
        <div class="dest-info">
          <h3>${dest.name}</h3>
          <p>${dest.description}</p>
          <p><small>📍 ${dest.region}</small></p>
          <div class="price-tag">from ৳${dest.price}</div>
          <a href="rent.html" class="btn-small order-from-card">Book This →</a>
        </div>
      </div>
    `).join('');
    
    document.querySelectorAll('.order-from-card').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const card = this.closest('.dest-card');
        const destName = card?.dataset.name;
        if (destName) {
          localStorage.setItem('preSelectedDestination', destName);
        }
      });
    });
  }
  
  // ========== SEARCH ON HOME PAGE WITH IMAGES ==========
  function setupHomeSearch() {
    const searchInput = document.getElementById('homeSearchInput');
    const searchBtn = document.getElementById('homeSearchBtn');
    const resultsDiv = document.getElementById('homeSearchResults');
    
    if (!searchInput || !searchBtn) return;
    
    function performSearch() {
      const query = searchInput.value.trim();
      if (query === '') {
        resultsDiv.innerHTML = '';
        return;
      }
      const filtered = destinations.filter(d => 
        d.name.toLowerCase().includes(query.toLowerCase()) || 
        d.region.toLowerCase().includes(query.toLowerCase())
      );
      
      if (filtered.length === 0) {
        resultsDiv.innerHTML = `<div style="background:#f5f0ea; border-radius:28px; padding:20px; text-align:center;">No results found for "${query}". Try Cox's Bazar, Sundarbans, or Sylhet.</div>`;
        return;
      }
      
      resultsDiv.innerHTML = filtered.map(d => `
        <div class="search-result-card">
          <div class="search-result-left">
            <img src="${d.image}" alt="${d.name}" class="search-result-img" onerror="this.src='https://placehold.co/60x60/e67e22/white?text=${encodeURIComponent(d.name.charAt(0))}'">
            <div class="search-result-info">
              <h4>${d.name}</h4>
              <p>${d.region} | from $${d.price}</p>
            </div>
          </div>
          <a href="rent.html" class="order-now-small order-from-search" data-dest="${d.name}">Order Now →</a>
        </div>
      `).join('');
      
      document.querySelectorAll('.order-from-search').forEach(btn => {
        btn.addEventListener('click', function() {
          const dest = this.dataset.dest;
          localStorage.setItem('preSelectedDestination', dest);
        });
      });
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
  }
  
  // ========== DESTINATIONS PAGE SEARCH ==========
  function setupDestSearch() {
    const searchInput = document.getElementById('destSearchInput');
    const searchBtn = document.getElementById('destSearchBtn');
    if (searchInput && searchBtn) {
      const performSearch = () => renderDestinations(searchInput.value.trim());
      searchBtn.addEventListener('click', performSearch);
      searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    }
    renderDestinations('');
  }
  
  // ========== RENTAL FORM HANDLER ==========
  const rentalForm = document.getElementById('rentalForm');
  if (rentalForm) {
    const preSelected = localStorage.getItem('preSelectedDestination');
    if (preSelected && document.getElementById('packageSelect')) {
      const select = document.getElementById('packageSelect');
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase().includes(preSelected.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
      localStorage.removeItem('preSelectedDestination');
    }
    
    rentalForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const fullname = document.getElementById('fullname')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const travelDate = document.getElementById('travelDate')?.value;
      const packageSelect = document.getElementById('packageSelect')?.value;
      const travelers = document.getElementById('travelers')?.value;
      
      if (!fullname || !email || !travelDate || !packageSelect) {
        showFeedback('Please fill all required fields (*).', 'error');
        return;
      }
      if (!email.includes('@')) {
        showFeedback('Enter a valid email address.', 'error');
        return;
      }
      
      showFeedback(`✨ Thank you ${fullname}! Your request for "${packageSelect}" (${travelers} travelers) has been received. Our team will email ${email} within 4 hours.`, 'success');
      rentalForm.reset();
    });
  }
  
  function showFeedback(msg, type) {
    const feedbackDiv = document.getElementById('formFeedback');
    if (feedbackDiv) {
      feedbackDiv.innerHTML = `<div style="background: ${type === 'success' ? '#e2f0e2' : '#ffe0db'}; padding: 14px; border-radius: 32px; color: ${type === 'success' ? '#2b6e3c' : '#b33b1c'}; margin-top: 20px;">${msg}</div>`;
      setTimeout(() => { feedbackDiv.innerHTML = ''; }, 5000);
    }
  }
  
  // ========== CONTACT FORM HANDLER ==========
  const contactForm = document.getElementById('contactFormSimple');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      if (!name || !email) {
        alert('Please provide name and email.');
        return;
      }
      const feedbackContact = document.getElementById('contactFeedback');
      if (feedbackContact) {
        feedbackContact.innerHTML = `<div style="background:#e2f0e2; padding:12px; border-radius:28px; margin-top:16px;">✅ Thanks ${name}! We'll reply to ${email} soon.</div>`;
        contactForm.reset();
        setTimeout(() => { feedbackContact.innerHTML = ''; }, 4000);
      }
    });
  }
  
  // Initialize page-specific functions
  setupHomeSearch();
  setupDestSearch();
});