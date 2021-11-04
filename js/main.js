jQuery("button").click(function () {
  //$(".accordion").hide();

  $.get("https://jsonplaceholder.typicode.com/users", function (data) {
    console.log(data);
    //$(".result").html(JSON.stringify(data));

    var htmlTemplate = "";

    data.forEach(function (contact) {
      htmlTemplate += `<div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-${contact.id}"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          ${contact.name}
        </button>
      </h2>
      <div
        id="collapse-${contact.id}"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <ul>
            <li>
            ${contact.email}
            </li>

            <li>
            ${contact.phone}
            </li>
          </ul>

          <p>
            ${contact.address.street}
            ${contact.address.suite}<br>
            ${contact.address.city}
          </p>
        </div>
      </div>
    </div>`;
    });

    $(".accordion").html(htmlTemplate);
  });
});
