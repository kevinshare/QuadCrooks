/* eslint-disable */
const express = require('express');
const next = require('next');
const pg = require('pg');
// const pgp = require('pg-promise')(/*options*/);
const AWS = require('aws-sdk');
const { parse } = require('url');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const rootDirectory = path.resolve(path.join('./'));
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require('dotenv').load();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});


AWS.config.region = 'us-east-1';

const s3 = new AWS.S3();


const connString = `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@quadcrooks2.cvc6mfp4k4aq.us-east-1.rds.amazonaws.com:5432/quadcrooks`;

const client = new pg.Client(connString);

client.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected")
    selectAll((err, photos) => {
      console.log(photos)
    })
  }
});
// SELECT ALL
const selectAll = (cb) => {
  client.query('SELECT * FROM images', (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res)
    }
    
  });
};
// SELECT ALL MATCHING
const selectAllMatching = (name, cb) => {
  const queryText = 'SELECT * FROM images WHERE name = $1';
  const values = [name];
  client.query(queryText, values, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
    
  });
};
// SELECT ONE BY NAME
const selectOne = (name, cb) => {
  const queryText = 'SELECT * FROM images WHERE name = $1';
  const values = [name];
  client.query(queryText, values, (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res.rows[0])
    }
  });
};
// SELECT ONE BY NAME
const selectOneById = (id, cb) => {
  const queryText = 'SELECT * FROM images WHERE id = $1';
  const values = [id];
  client.query(queryText, values, (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res.rows[0])
    }
  });
};
const deleteOne = (name, cb) => {
  const queryText = 'SELECT ONE FROM images WHERE name = $1';
  const values = [name];
  client.query(queryText, values, (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res)
    }
  });
};
//INSERT ONE
const insertOne = (postObj, cb) => {
  const queryText = 'INSERT INTO images (name, description, photo) VALUES ($1, $2, $3)';
  const values = [postObj.name, postObj.description, postObj.photo];
  client.query(queryText, values, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  });
};
//ADD IMAGE TO LOCAL DIRECTORY ON UPLOAD
const addFileToLocalDirectory = (file, cb) => {
  const typeSplit = file.mimetype.split('/');
  const imageType = typeSplit[1];
  const imageName = file.name;
  file.mv(`${rootDirectory}/static/${imageName}`, (err) => {
    if (err) {
      cb(err, null);
    }

    cb(null, { image: `${imageName}` });
  });
}

// ADD PHOTO TO S3
const callPostPhotos = (req, res, cb) => {
  const imageFile = req.files.file;
  const imageName = imageFile.name;
  const filePath = `${rootDirectory}/static/${imageName}`;
  const params = {
    Bucket: 'quadcrooks',
    Body: fs.createReadStream(filePath),
    Key: `${req.body.name}-${imageName}`,
    ACL: 'public-read'
  };
  s3.upload(params, (err, data) => {
    if (err) {
      cb(err, null);
    }
    if (data) {
      cb(null, data.Location);
    }
  });
};


nextApp.prepare().then(() => {

  // express code here
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());



  app.post('/api/photos/save', (req, res) => {
    callPostPhotos(req, res, (err, location) => {
      if (err) {
        console.log(err);
      } else {
        req.body.photo = location;
        insertOne(req.body, (err, response) => {
          if (err) {
            res.json({ error: "could not insert image to database" });
          } else {
            res.json({ data: response })
          }
        });
      }
    });
  });
  
  app.post('/api/photo', (req, res) => {
    addFileToLocalDirectory(req.files.file, (err, data) => {
      if (err) {
         res.json({ error: "could not add to local directory" })
      } else {
        res.json({ data: data })
      }
    });
  });

  app.post('/api/delete', (req, res) => {
    deleteOne((err, data) => {
      if (err) {
        throw err;
      } else {
        res.send(data)
      }
    });
  });

  app.get('/api/select', (req, res) => {
    selectOne(req.query.name, (err, data) => {
      if (err) {
        res.json({ error: "Error could not select" });
      } else {
        res.json({ data: data });
      }
    });
  });

  app.get('/api/select/id', (req, res) => {
    selectOneById(req.query.id, (err, data) => {
      if (err) {
        res.json({ error: "Error could not select" });
      } else {
        res.json({ data: data, status: 'exists' });
      }
    });
  });

  app.get('/api/photos', (req, res) => {
    selectAll((err, photos) => {
      if (err) {
        throw err;
      } else {
        res.json({ images: photos })
      }
    });
  });

  app.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const types = ['jpg', 'jpeg', 'png', 'tiff', 'gif'];
    const urlBreakdown = parsedUrl.pathname.split('.');
    const decision = urlBreakdown[1];
    if (types.includes(decision)) {
      const currentPath = path.join(rootDirectory, 'static', parsedUrl.pathname);
      nextApp.serveStatic(req, res, currentPath);
    } else {
      handle(req, res, parsedUrl); // for all the react stuff
    }
  });
 

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });

});

