export const fetchArrivals = arrivals => (
  $.ajax({
    method: 'GET',
    url: 'api/arrivals',
    arrivals
  })
);
