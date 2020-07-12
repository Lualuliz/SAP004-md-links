const fs = require('fs');


const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;

const mdLinks = (path) => {
  
  return new Promise((resolve, reject) => {
   
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject('Erro no arquivo');
      }
      const links = data.match(regex)
        .map((item) => {
          const splited = item.split('](');
          return {
            text: splited[0].slice(1),
            href: splited[1].slice(0, -1),
          };
        });
      resolve(links);
     
      
    });
  });
};

module.exports = mdLinks;






    

