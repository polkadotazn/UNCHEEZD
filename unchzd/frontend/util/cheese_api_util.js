export const fetchAllCheeses = () => (
  $.ajax({
    method: 'GET',
    url: 'api/cheeses'
  })
);

export const fetchACheese = id => {
  $.ajax({
    method: 'GET',
    url: `api/cheeses/${id}`
  });
};

export const createCheese = cheese => {
  $.ajax({
    method: 'POST',
    url: `api/cheeses`,
    data: { cheese }
  });
};

export const updateCheese = cheese => {
  $.ajax({
    method: 'PATCH',
    url: `api/cheeses/${cheese.id}`,
    data: { cheese }
  });
};

export const deleteCheese = cheeseId => {
  $.ajax({
    method: 'DELETE',
    url: `api/cheeses/${cheeseId}`,
  });
};
