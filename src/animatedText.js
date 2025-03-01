const animatedText = (element) => {
  const letterNumb = element.dataset.texto.length;

  //activating the pointer when animation starts.
  const pointer = element.querySelector('.hero__cursor');
  pointer.classList.add('hero__cursor--visible');

  //For each letter, we add it to the DOM with a 100ms delay.
  for (let i = 0; i < letterNumb; i++) {
    setTimeout(() => {
      const letter = document.createElement('span');
      letter.append(element.dataset.texto[i]);
      element.append(letter);
    }, 100 * i);
  }

  // We change the cursor class when the letter animation is finished.
  setTimeout(() => {
    // We get the cursors.
    const cursors = [...document.querySelectorAll('.hero__cursor')];

    // We get the index of the current cursor.
    const activeCursorIdx = cursors.indexOf(pointer);

    // We check that the cursor is not the last one.
    if (activeCursorIdx < cursors.length - 1) {
      pointer.classList.remove('hero__cursor--visible');
    } else {
      pointer.classList.add('hero__cursor--visible');
    }
  }, letterNumb * 100);

  //We return a promise to know when the animation has finished.
  return new Promise((resolve) => setTimeout(resolve, letterNumb * 100));
};

export default animatedText;
