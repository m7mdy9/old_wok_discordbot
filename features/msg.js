module.exports = (client, instance) => {
    client.on("message", message =>{
        
    if (message.content === "SIKE") {
        console.log("SIKE")
    }
  })
}
module.exports.config = {
  displayName: 'SIKE', // Can be changed any time
  dbName: 'SIKE', // Should be unique and NEVER be changed once set
  loadDBFirst: true, // Wait for the database connection to be present
}