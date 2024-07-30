document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsDiv = document.getElementById('suggestions');
  
    
    const items = ['Shoes', 'Shirts', 'Shorts', 'Hats', 'Socks', 'Sneakers', 'Sandals'];
  
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      suggestionsDiv.innerHTML = ''; 
      if (query.length > 0) {
        const filteredItems = items.filter(item => item.toLowerCase().startsWith(query));
        if (filteredItems.length > 0) {
          suggestionsDiv.style.display = 'block';
          const ul = document.createElement('ul');
          filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', function() {
              searchInput.value = item;
              suggestionsDiv.innerHTML = '';
              suggestionsDiv.style.display = 'none';
            });
            ul.appendChild(li);
          });
          suggestionsDiv.appendChild(ul);
        } else {
          suggestionsDiv.style.display = 'none';
        }
      } else {
        suggestionsDiv.style.display = 'none';
      }
    });
  
    
    document.addEventListener('click', function(event) {
      if (!searchInput.contains(event.target) && !suggestionsDiv.contains(event.target)) {
        suggestionsDiv.style.display = 'none';
      }
    });
  });
  
