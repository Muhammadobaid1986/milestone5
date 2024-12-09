const downloadButton = document.getElementById('download-btn') as HTMLButtonElement;
const contentArea = document.getElementById('resume-content') as HTMLTextAreaElement;

downloadButton.addEventListener('click', () => {
  const content = contentArea.value;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume.txt';
  a.click();
  URL.revokeObjectURL(url);
});
