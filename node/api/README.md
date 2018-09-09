Fullstack Training API Server
=============================

MongoDB Server Setup on Windows
===============================
# Follow this article https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

# 1. Download msi installer and Install
# 2. Add 'C:\Program Files\MongoDB\Server\3.6\bin' to Path Environment Variables
# 3. Open cmd as admin and Run MongoDB Server
mongod --dbpath '\path\to\where_you_want_to_store_data'

# 4. Test connection
mongo.exe
show dbs

# 5. Simple MongoDB Queries
use fs-training
show collections
db.user.find().pretty()
db.user.save({})
db.user.drop
db.user.remove({})

# 6. First Record Insertion
use fs-training
db.user.insert({'email': 'name@gmail.com', 'password': '123456'})

Node API Server Setup
=====================
npm install

MongoDB Connection with Node
============================
npm install mongodb

Start Server
============
npm start (or) node app.js

API Testing with Postman
========================
# Method is POST
http://localhost:8000/v1/fstraining/api/auth/login

# Body is raw 
# JSON (application/json)

# Content is 
{
	"email": "name@gmail.com",
    "password": "123456"
}
# Make sure email inside ""
