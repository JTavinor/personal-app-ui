const moneyURLS = {
  MONEY: "/money",
  CREATE_EXPENSES: "create-expenses",
  CATEGORIES: "categories",
};

const dietURLS = {
  DIET: "/diet",
  ADD_WEIGHTS: "add-weights",
  WEIGHT_STATS: "weight-stats",
};

const URLS = {
  BASE_URL: "/",
  ...moneyURLS,
  ...dietURLS,
};

export default URLS;
