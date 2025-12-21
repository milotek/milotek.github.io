window.addEventListener('load', function() {
  const WORKER_URL = "https://discord-logger.your-name.workers.dev"; // 🔴 REPLACE THIS with your Worker URL

  fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page: window.location.pathname + window.location.hash // Sends "/about.html" or "/contact"
    })
  }).catch(error => console.log('Log failed', error));
});