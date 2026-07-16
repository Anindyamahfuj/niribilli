// script.js - Complete with 20+ destinations and working images in search results
document.addEventListener('DOMContentLoaded', function() {

  // ========== 20+ DESTINATIONS DATABASE WITH WORKING IMAGES ==========
  const destinations = [
   const costData = [
  { name: "Cox's Bazar", region: "Chittagong", transport: 6000, hotel: 6000, food: 3000, local: 2000, guide: 1000, price: 22000 },
  { name: "Sundarbans", region: "Khulna", transport: 8000, hotel: 8000, food: 4000, local: 3000, guide: 1600, price: 29000 },
  { name: "Sylhet", region: "Sylhet", transport: 5000, hotel: 5000, food: 2400, local: 1600, guide: 800, price: 18000 },
  { name: "Bandarban", region: "Hill Tracts", transport: 7000, hotel: 6400, food: 3000, local: 2400, guide: 1000, price: 24000 },
  { name: "Sajek Valley", region: "Rangamati", transport: 7600, hotel: 7000, food: 3200, local: 2600, guide: 1200, price: 27000 },
  { name: "Rangamati", region: "Hill Tracts", transport: 6400, hotel: 5600, food: 2800, local: 2000, guide: 900, price: 21000 },
  { name: "St. Martin's Island", region: "Bay of Bengal", transport: 10000, hotel: 9000, food: 4000, local: 3000, guide: 1400, price: 32000 },
  { name: "Kuakata Beach", region: "Barisal", transport: 5600, hotel: 5000, food: 2600, local: 1800, guide: 800, price: 19000 },
  { name: "Srimangal", region: "Sylhet", transport: 4800, hotel: 4600, food: 2200, local: 1400, guide: 800, price: 17000 },
  { name: "Paharpur", region: "Naogaon", transport: 4400, hotel: 4000, food: 2000, local: 1600, guide: 800, price: 16000 },
  { name: "Mahasthangarh", region: "Bogra", transport: 4000, hotel: 3600, food: 1800, local: 1400, guide: 700, price: 15000 },
  { name: "Sonargaon", region: "Dhaka", transport: 3000, hotel: 3200, food: 1600, local: 1000, guide: 600, price: 13000 },
  { name: "Bagerhat", region: "Khulna", transport: 4600, hotel: 4200, food: 2000, local: 1600, guide: 800, price: 17000 },
  { name: "Jaflong", region: "Sylhet", transport: 5200, hotel: 4800, food: 2200, local: 1600, guide: 800, price: 18000 },
  { name: "Ratargul", region: "Sylhet", transport: 4400, hotel: 4000, food: 2000, local: 1400, guide: 800, price: 16000 },
  { name: "Nijhum Dwip", region: "Noakhali", transport: 6000, hotel: 5600, food: 2600, local: 2000, guide: 900, price: 21000 },
  { name: "Lawachara", region: "Sylhet", transport: 4000, hotel: 3600, food: 1800, local: 1200, guide: 700, price: 15000 },
  { name: "Tanguar Haor", region: "Sunamganj", transport: 7000, hotel: 6000, food: 2800, local: 2000, guide: 1000, price: 23000 },
  { name: "Bisanakandi", region: "Sylhet", transport: 5200, hotel: 4800, food: 2200, local: 1600, guide: 800, price: 18000 },
  { name: "Madhabkunda", region: "Moulvibazar", transport: 4000, hotel: 3600, food: 1800, local: 1400, guide: 700, price: 15000 }
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
    
    const rates = { BDT: 
