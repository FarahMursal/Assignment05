window.addEventListener('load', () => {
    const processForm = (event) => {
      event.preventDefault(); // prevent default form submission behavior
      const formData = new FormData(event.target); // get form data
      const data = Object.fromEntries(formData.entries()); // convert FormData to object
      console.log(data); // display form data in console
    };
  
    const form = document.querySelector('form');
    form.addEventListener('submit', processForm);
  });