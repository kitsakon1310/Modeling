db = db.getSiblingDB("mju_grade")

db.students.drop()

db.students.insertMany([
{ _id:"66010001", fullName:"a", faculty:"a1", major:"1", gpax:3.45 },
{ _id:"66010002", fullName:"b", faculty:"a2", major:"2", gpax:3.20 },
{ _id:"66010003", fullName:"c", faculty:"a3", major:"3", gpax:2.98 },
{ _id:"66010004", fullName:"d", faculty:"a4", major:"4", gpax:3.80 },
{ _id:"66010005", fullName:"e", faculty:"a5", major:"5", gpax:3.60 }
])

db.students.createIndex({ faculty:1 })
db.students.createIndex({ major:1 })