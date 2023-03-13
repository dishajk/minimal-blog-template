function loadBlog(){
        const mainElement = document.getElementById('main');
        mainElement.innerHTML = '<h1>New Blog Post</h1><p>This is the content of the new blog post.</p>';
        
        const fs = require('fs');

        function getFilesInFolder(folderPath) {
          // Use the fs.readdir() method to read the contents of the folder
          fs.readdir(folderPath, (err, files) => {
            if (err) {
              console.log(err);
              return;
            }
            
            // Filter out any subdirectories, and return an array of just the file names
            const fileNames = files.filter(file => !fs.statSync(`${folderPath}/${file}`).isDirectory());
            console.log(fileNames);
          });
        }
        
        // Example usage: get the files in the current working directory
        getFilesInFolder('./blog');
}