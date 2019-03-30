'use strict';
/* global $ */

function handleSubmitButton() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    const num = $('#number-choice').val();

    $('.js-results').empty();
    for (let i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        $('.js-results').append(`
      <div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>
      `);
      } else if (i % 3 === 0) {
        $('.js-results').append(`
        <div class="fizz-buzz-item fizz">
          <span>fizz</span>
        </div>
        `);
      } else if (i % 5 === 0) {
        $('.js-results').append(`
        <div class="fizz-buzz-item buzz">
          <span>buzz</span>
        </div>
        `);
      } else {
        $('.js-results').append(`
        <div class="fizz-buzz-item">
          <span>${i}</span>
        </div>
        `);
      }
    }
  });
}

$(handleSubmitButton);