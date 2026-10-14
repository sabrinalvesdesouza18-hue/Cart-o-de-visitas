function copiarEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    const status = document.getElementById('copy-status');
    const originalText = status.textContent;

    status.textContent = 'Copiado! ✓';
    status.style.color = '#10b981';

    setTimeout(() => {
      status.textContent = originalText;
      status.style.color = '';
    }, 2000);
  });
}