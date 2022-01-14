AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("found");
      this.show();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("lost");
      this.hide();
    });
  },
  show: function() {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButtton = document.getElementById("order-button");
    var orderSummaryButtton = document.getElementById("order-summary-button");

    orderButtton.addEventListener("click", () => {
      swal({
        icon: "success",
        title: "Thanks For the Order!",
        buttons: false
      });
    });

    orderSummaryButtton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work In Progress"
      });
    });
  },

  hide: function() {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
