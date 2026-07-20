// script.js - Complete with 20+ destinations and working images in search results
document.addEventListener('DOMContentLoaded', function() {

  // ========== 20+ DESTINATIONS DATABASE WITH WORKING IMAGES ==========
  const destinations = [
    { name: "Cox's Bazar", region: "Chittagong", price: 22000, image: "https://images.pexels.com/photos/18211668/pexels-photo-18211668/free-photo-of-sunset-over-beach-with-people-walking-and-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "World's longest natural sea beach with golden sands" },
    { name: "Sundarbans", region: "Khulna", price: 29000, image: "https://images.pexels.com/photos/2340970/pexels-photo-2340970.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Mangrove forest & Royal Bengal Tiger sanctuary" },
    { name: "Sylhet", region: "Sylhet", price: 18000, image: "https://images.pexels.com/photos/17322299/pexels-photo-17322299/free-photo-of-sylhet-tea-garden.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Rolling tea estates & misty hills" },
    { name: "Bandarban", region: "Hill Tracts", price: 24000, image: "https://images.pexels.com/photos/8795752/pexels-photo-8795752.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Hill tracts, Nilgiri mountains & indigenous culture" },
    { name: "Sajek Valley", region: "Rangamati", price: 27000, image: "https://images.pexels.com/photos/1619681/pexels-photo-1619681.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Cloud-kissing hills & serene landscapes" },
    { name: "Rangamati", region: "Hill Tracts", price: 21000, image: "https://images.pexels.com/photos/13713643/pexels-photo-13713643.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Kaptai Lake & tribal handicrafts" },
    { name: "St. Martin's Island", region: "Bay of Bengal", price: 32000, image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Coral island & blue waters" },
    { name: "Kuakata Beach", region: "Barisal", price: 19000, image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Where sun rises and sets over the sea" },
    { name: "Srimangal", region: "Sylhet", price: 17000, image: "https://images.pexels.com/photos/1698897/pexels-photo-1698897.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Tea capital & Lawachara rainforest" },
    { name: "Paharpur", region: "Naogaon", price: 16000, image: "https://images.pexels.com/photos/1194233/pexels-photo-1194233.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "UNESCO Buddhist Vihara" },
    { name: "Mahasthangarh", region: "Bogra", price: 15000, image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Ancient city ruins from 3rd century BC" },
    { name: "Sonargaon", region: "Dhaka", price: 13000, image: "https://images.pexels.com/photos/1698897/pexels-photo-1698897.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Old capital & folk art museum" },
    { name: "Bagerhat", region: "Khulna", price: 17000, image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Sixty Dome Mosque (UNESCO)" },
    { name: "Jaflong", region: "Sylhet", price: 18000, image: "https://images.pexels.com/photos/1698897/pexels-photo-1698897.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Stone collection & Dawki river view" },
    { name: "Ratargul", region: "Sylhet", price: 16000, image: "https://images.pexels.com/photos/2340970/pexels-photo-2340970.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Freshwater swamp forest" },
    { name: "Nijhum Dwip", region: "Noakhali", price: 21000, image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Deer island & mangrove forest" },
    { name: "Lawachara", region: "Sylhet", price: 15000, image: "https://images.pexels.com/photos/2340970/pexels-photo-2340970.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Rainforest & gibbon sanctuary" },
    { name: "Tanguar Haor", region: "Sunamganj", price: 23000, image: "https://images.pexels.com/photos/1619681/pexels-photo-1619681.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Ramsar wetland & migratory birds" },
    { name: "Bisanakandi", region: "Sylhet", price: 18000, image: "https://images.pexels.com/photos/1698897/pexels-photo-1698897.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Border view with India & rocky streams" },
    { name: "Madhabkunda", region: "Moulvibazar", price: 15000, image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", description: "Waterfall & lush greenery" }
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
              <p>${d.region} | from ৳${d.price}</p>
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

// ============================================
// 50X BETTER – NIRIBILI TRAVELS FEATURES
// ============================================

// 1. LEAD POPUP
document.addEventListener('DOMContentLoaded', function() {
    const leadTriggers = document.querySelectorAll('#leadTrigger');
    const leadPopup = document.getElementById('leadPopup');
    const leadClose = document.getElementById('leadClose');
    const leadForm = document.getElementById('leadForm');

    if (leadPopup) {
        function openPopup() {
            if (localStorage.getItem('leadCaptured') === 'true') {
                showToast('✅ You are already subscribed!', 'success');
                return;
            }
            leadPopup.classList.add('show');
        }

        leadTriggers.forEach(btn => btn.addEventListener('click', openPopup));

        if (leadClose) {
            leadClose.addEventListener('click', function() {
                leadPopup.classList.remove('show');
            });
        }

        leadPopup.addEventListener('click', function(e) {
            if (e.target === this) this.classList.remove('show');
        });

        if (leadForm) {
            leadForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('leadName')?.value.trim();
                const email = document.getElementById('leadEmail')?.value.trim();
                if (!name || !email || !email.includes('@')) {
                    showToast('⚠️ Please fill in all fields correctly.', 'error');
                    return;
                }
                localStorage.setItem('leadCaptured', 'true');
                localStorage.setItem('leadName', name);
                localStorage.setItem('leadEmail', email);
                this.innerHTML = '<p style="color:#D4AF37;font-size:1.2rem;">✅ Thank you! You\'ll get travel deals.</p>';
                setTimeout(() => {
                    leadPopup.classList.remove('show');
                    showToast('✈️ Welcome to Niribili Travels!', 'success');
                }, 1500);
            });
        }
    }
});

// 2. TRIP COST CALCULATOR
document.getElementById('calcBtn')?.addEventListener('click', function() {
    const dest = document.getElementById('calcDestination').value;
    const days = parseInt(document.getElementById('calcDays').value) || 1;
    const travelers = parseInt(document.getElementById('calcTravelers').value) || 1;
    const budget = parseInt(document.getElementById('calcBudget').value) || 1000;
    
    const baseCosts = {
        coxsbazar: 800,
        sundarbans: 1200,
        sylhet: 600,
        bandarban: 900,
        sajek: 1100
    };
    const base = baseCosts[dest] || 800;
    const total = (base + budget) * days * travelers;
    const perPerson = total / travelers;
    const daily = total / days;
    
    document.getElementById('totalCost').textContent = total.toLocaleString() + ' ৳';
    document.getElementById('perPersonCost').textContent = perPerson.toLocaleString() + ' ৳';
    document.getElementById('dailyBudget').textContent = daily.toLocaleString() + ' ৳';
});

// 3. ITINERARY BUILDER
let itineraryItems = [];
document.getElementById('itrAddBtn')?.addEventListener('click', function() {
    const day = document.getElementById('itrDay').value.trim();
    const activity = document.getElementById('itrActivity').value.trim();
    if (!day || !activity) {
        showToast('⚠️ Please fill in both fields.', 'error');
        return;
    }
    itineraryItems.push({ day, activity });
    renderItinerary();
    document.getElementById('itrDay').value = '';
    document.getElementById('itrActivity').value = '';
    showToast('✅ Activity added to itinerary!', 'success');
});

function renderItinerary() {
    const list = document.getElementById('itrList');
    if (itineraryItems.length === 0) {
        list.innerHTML = '<p style="color:#888;">Your itinerary will appear here.</p>';
        return;
    }
    list.innerHTML = itineraryItems.map((item, i) => `
        <div class="itinerary-item">
            <span><strong>${item.day}</strong> – ${item.activity}</span>
            <span class="itr-remove" onclick="removeItinerary(${i})">&times;</span>
        </div>
    `).join('');
}

function removeItinerary(index) {
    itineraryItems.splice(index, 1);
    renderItinerary();
    showToast('🗑️ Activity removed', 'info');
}

document.getElementById('itrShareBtn')?.addEventListener('click', function() {
    if (itineraryItems.length === 0) {
        showToast('⚠️ Add some activities first!', 'error');
        return;
    }
    const text = itineraryItems.map(i => `${i.day}: ${i.activity}`).join('\n');
    const url = `https://wa.me/?text=${encodeURIComponent('My Niribili Travel Itinerary:\n' + text)}`;
    window.open(url, '_blank');
    showToast('📤 Sharing itinerary...', 'info');
});

// 4. CURRENCY CONVERTER
document.getElementById('curConvertBtn')?.addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('curAmount').value) || 0;
    const from = document.getElementById('curFrom').value;
    const to = document.getElementById('curTo').value;
    
    const rates = { BDT: 1, USD: 0.0082, GBP: 0.0065, EUR: 0.0076 };
    const result = (amount / rates[from]) * rates[to];
    document.getElementById('curResult').textContent = result.toFixed(2) + ' ' + to;
});

// 5. BACK TO TOP
window.addEventListener('scroll', function() {
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        if (window.scrollY > 300) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    }
});
document.getElementById('backToTop')?.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 6. SCROLL PROGRESS
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) progressBar.style.width = progress + '%';
});

// 7. THEME TOGGLE (Fixed with Toast)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    // Load saved theme
    const currentTheme = localStorage.getItem('niribiliTheme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('niribiliTheme', 'light');
            this.innerHTML = '<i class="fas fa-sun"></i>';
            // Show toast using the global function
            if (typeof showToast === 'function') {
                showToast('🌞 Light mode activated', 'info');
            } else {
                console.log('🌞 Light mode activated');
            }
        } else {
            localStorage.setItem('niribiliTheme', 'dark');
            this.innerHTML = '<i class="fas fa-moon"></i>';
            if (typeof showToast === 'function') {
                showToast('🌙 Dark mode activated', 'info');
            } else {
                console.log('🌙 Dark mode activated');
            }
        }
    });
}

// 8. TOAST FUNCTION
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

console.log('🚀 50X Better – Niribili Travels features loaded!');
