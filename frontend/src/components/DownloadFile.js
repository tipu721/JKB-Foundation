import React from 'react';

function FileDownload() {
  const downloadFile = async (fileName) => {
    try {
      const response = await fetch(`https://example.com/api/download/${fileName}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName; // Use the specified file name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file: ', error);
    }
  };

  return (
    <div>
      <button onClick={() => downloadFile('desired-file-name.pdf')}>Download File</button>
    </div>
  );
}

export default FileDownload;
