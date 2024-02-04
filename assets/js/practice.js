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

    createCustomer(3, 'Dhoni', 'Datastructres: Ways of organizing and storing data efficiently, like arrays, linked lists, and trees.  Algorithms: Step-by-step procedures for solving problems, performing tasks on data structures, e.g., sorting or searching..');

    createCustomer(4, 'Sai Pallavi', 'React.js is an open-source JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of web applications. React is widely used for building interactive and dynamic single-page applications.');

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
