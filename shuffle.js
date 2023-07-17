document.addEventListener("DOMContentLoaded", () => {
  // Set effect velocity in ms
  let velocity = 50;
  let shuffleElement = document.querySelector(".shuffle");

  shuffleElement.setAttribute("data-text", shuffleElement.textContent);

  let shuffle = function (o) {
    for (
      let j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  let shuffleText = function (element, originalText) {
    let elementTextArray = [];
    let randomText = [];

    for (i = 0; i < originalText.length; i++) {
      elementTextArray.push(originalText.charAt([i]));
    }

    let repeatShuffle = function (times, index) {
      if (index == times) {
        element.textContent = originalText;
        return;
      }

      setTimeout(function () {
        randomText = shuffle(elementTextArray);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join("");
        element.textContent = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };
    repeatShuffle(element.textContent.length, 0);
  };
  shuffleElement.addEventListener("mouseover", function () {
    shuffleText(shuffleElement, shuffleElement.textContent);
  });
});
