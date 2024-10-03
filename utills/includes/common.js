const fs = require('fs');
const path = require('path');

// Function to add or update links in the JSON file
export function AddOrUpdateLink(newLink) {
  const filePath = path.join(__dirname, '../../../../../public', 'link.json');

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    // If the file doesn't exist, create it with the initial link
    const initialData = { links: [newLink] };
    fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
    console.log('File created and link added.');
    return;
  }

  // If file exists, read the file content
  const data = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(data);

  // Check if the link already exists
  if (!jsonData.links.includes(newLink)) {
    jsonData.links.push(newLink);
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    console.log('Link added to the file.');
  } else {
    console.log('Link already exists in the file.');
  }
}

// Example usage:
