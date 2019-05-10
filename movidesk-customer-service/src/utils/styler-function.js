export const removeClass = (elements, classToRemove) => {
  if (elements.length > 1) {
    [].forEach.call(elements, el => {
      el.classList.remove(classToRemove);
    });
  }
};

//event.target.parentElement.parentElement.getElementsByTagName('li')
