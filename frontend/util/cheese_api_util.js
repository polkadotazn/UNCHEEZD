export const fetchAllCheeses = () => (
  $.ajax({
    method: 'GET',
    url: 'api/cheeses'
  })
);

export const fetchACheese = id => (
  $.ajax({
    method: 'GET',
    url: `api/cheeses/${id}`
  })
);

export const createCheese = (cheese) => {
  return $.ajax({
    method: 'POST',
    url: `/api/cheeses`,
    data: cheese,
    processData: false,
    contentType: false
  });
};

// export const createCheese = cheese => (
//   $.ajax({
//     method: 'POST',
//     url: `api/cheeses`,
//     data: { cheese }
//   })
// );

export const updateCheese = (cheese, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/cheeses/${id}`,
    data: cheese,
    processData: false,
    contentType: false
  })
);

export const deleteCheese = cheeseId => (
  $.ajax({
    method: 'DELETE',
    url: `api/cheeses/${cheeseId}`,
  })
);

export const uploadPicture = data => (
  $.ajax({
    method: 'POST',
    url: `/api/cheeses`,
    data: data,
    processData: false,
    contentType: false
  })
);

export const updatePicture = (data, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/cheeses/${id}`,
    data: data,
    processData: false,
    contentType: false
  })
);
