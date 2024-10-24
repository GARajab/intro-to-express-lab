const express = require("express")
const app = express()

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
]

app.get("/shoes", (req, res) => {
  const min_price = parseFloat(req.query.min_price)
  const max_price = parseFloat(req.query.max_price)
  const type = req.query.type
  let filteredShoes = [...shoes]

  // Using if statements to filter shoes based on conditions
  if (!isNaN(min_price)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= min_price)
  }

  if (!isNaN(max_price)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= max_price)
  }

  if (type) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.type.toLowerCase() === type.toLowerCase()
    )
  }

  res.send(filteredShoes)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
