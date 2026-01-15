// Font loading script to prevent FOUT
(function() {
  // Check if fonts are already loaded
  if (sessionStorage.getItem('fontsLoaded')) {
    document.documentElement.classList.add('fonts-loaded');
    return;
  }

  // Load fonts
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('400 1em Anton'),
      document.fonts.load('400 1em Teko'),
      document.fonts.load('600 1em Caveat')
    ]).then(function() {
      document.documentElement.classList.add('fonts-loaded');
      sessionStorage.setItem('fontsLoaded', 'true');
    }).catch(function() {
      // Fallback: show content after timeout
      setTimeout(function() {
        document.documentElement.classList.add('fonts-loaded');
      }, 2000);
    });
  } else {
    // Fallback for browsers without Font Loading API
    document.documentElement.classList.add('fonts-loaded');
  }
})();
