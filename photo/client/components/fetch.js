const $ = require("jquery");
//
export const resImages = (rest_id, cb) => {
  $.ajax({
    url: `http://localhost:3004/restaurants/${rest_id}/gallery`,
    method: "GET",
    success: resImages => {
      cb(rest_id, resImages);
    }
  });
};
