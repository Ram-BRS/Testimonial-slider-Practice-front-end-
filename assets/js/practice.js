(function () {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img = `./assets/img/${img}.jpg`;
        let customer = new Customer(Img, name, text);
        customers.push(customer);
    }

    createCustomer(0, 'Ram', 'HTML Stands for hypertext markup language. With HTML you can create your own websites HTML describe the structure of web pages, HTML consists of series of elements HTML elemmets tell the browser how to display the content');

    createCustomer(1, 'Sravan', 'CSS Stands for cascading style sheets.  We use to style HTML documents. CSS describes how HTML elements are to be displayed on the screen or other media. CSS saves a lot of work and it can control the layout of multiple web pages all at once.');

    createCustomer(2, 'Rajesh', 'Javascript is a language mainly used for adding interactivity and dynanic content to webpages. It runs in web browsers. enabling developers to create interact user interfaces and enhance user experience.');

    createCustomer(3, 'Dhoni', 'Data structure is a mechanical or logical way that data is organized.');

    createCustomer(4, 'Sai Pallavi', 'HTML Stands for hypertext markup language. With HTML, you can create your own websites. HTML describes the structure of web pages, HTML consists of a series of elements. HTML elements tell the browser how to display the content.');

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                index = (index - 1 + customers.length) % customers.length;
            } else if (e.target.parentElement.classList.contains('nextBtn')) {
                index = (index + 1) % customers.length;
            }

            customerImage.src = customers[index].img;
            customerName.textContent = customers[index].name;
            customerText.textContent = customers[index].text;
        });
    });
})();
