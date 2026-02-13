db.students.createIndex({ faculty:1 })
db.students.createIndex({ major:1 })

db.sections.createIndex({ students:1 })
db.sections.createIndex({ instructor:1 })

db.transcripts.createIndex({ _id:1 })
db.transcripts.createIndex({ "records.year":1, "records.term":1 })