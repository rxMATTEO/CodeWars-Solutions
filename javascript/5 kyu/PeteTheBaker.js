function cakes(recipe, available) {
  return Math.min(...Object.entries(recipe).map(([k, v]) => Math.floor(available[k] / v))) || 0;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));