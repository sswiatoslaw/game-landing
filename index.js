const cardWrapper = document.querySelector('.card-wrapper');

function createCard(name, position, img, content, date) {
  const divCard = document.createElement('div');
divCard.className = 'card';

const divHeader = document.createElement('div');
divHeader.className = 'card_header';
divCard.appendChild(divHeader)

const divHeaderCardText = document.createElement('div');
divHeaderCardText.className = 'card_text';

divHeader.appendChild(divHeaderCardText);

const divHeaderCardTextH4 = document.createElement('h4');
divHeaderCardTextH4.textContent = name
divHeaderCardText.append(divHeaderCardTextH4);

const divHeaderCardTextSpan = document.createElement('span');
divHeaderCardTextSpan.textContent = position
divHeaderCardText.append(divHeaderCardTextSpan);

const divHeaderImg = document.createElement('img');
divHeaderImg.src = img;
divHeader.append(divHeaderImg);

const divContent = document.createElement('div');
divContent.className = 'card_content';
divCard.appendChild(divContent)

const divContentP = document.createElement('p');
divContentP.textContent = content
divContent.append(divContentP)

const divFooter = document.createElement('div');
divFooter.className = 'card_footer';

divCard.appendChild(divFooter);

const divFooterSpan = document.createElement('span');
divFooterSpan.textContent = date;
divFooter.append(divFooterSpan)

return divCard
}

console.log(createCard('Evan Lahti', 'PC Gamer', './images/image 8.jpg', '“One of my gaming highlights of the year.”', 'October 18, 2018'))

cardWrapper.appendChild(createCard('Evan Lahti', 'PC Gamer', './images/image 8.jpg', '“One of my gaming highlights of the year.”', 'October 18, 2018'));
cardWrapper.appendChild(createCard('Evan Lahti', 'PC Gamer', './images/image 8.jpg', '“One of my gaming highlights of the year.”', 'October 18, 2018'));
cardWrapper.appendChild(createCard('Evan Lahti', 'PC Gamer', './images/image 8.jpg', '“One of my gaming highlights of the year.”', 'October 18, 2018'));

let swiper = new Swiper(".gallery", {
  effect: "cards",
  grabCursor: true,
});

