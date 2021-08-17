class Project {
    constructor(
        _id, title, description, technologies, images, link, source
    ) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.images=[];
        images.forEach(image => this.images.push("./images/proyectos/"+image));
        this.technologies = technologies;
        this.link = link;
        this.source = source;
    }
}
let projects = [
    new Project(1, 'Optic Manager', 
        `Developed as the final project for a fullstarck web development course on Python and Javascript, this is an Optical Clinic Management System.
        It has multiple user roles: secretary, doctor, pacient, seller, with specific functions for each. Read more about it in the github repository.`, 
        ["Python", "Django", "SQLite", "Javascript"],
        [
            '1- Optic/0.png',
            '1- Optic/1.png',
            '1- Optic/2.png',
            '1- Optic/3.png',
            '1- Optic/4.png',
            '1- Optic/5.png',
            '1- Optic/6.png',
            '1- Optic/7.png',
            '1- Optic/8.png',
            '1- Optic/9.png',
            '1- Optic/10.png',
            '1- Optic/11.png',
            '1- Optic/12.png'
        ], 
        'https://www.youtube.com/watch?v=FeVTgzbpUCg&list=PLsYkGSTiaVj9_QuHrycJwua8XsSkmeG4G&index=1&t=5s&ab_channel=FranciscodelaTorre',
        'https://github.com/matildegarelik/tpfinal-fullstack-django'),

    
    new Project(2, 'Zethai', 
        `This web application is an API builder: allows users to use AI processes, creating custom workflows in a canvas. 
        Workflows can be scheduled or executed manually, and there is a leaderboard that ranks users accorrding to their workflows efficency. 
        It also allows users to create new AI models and add them to the database. I was hired as a collaborator in the project.`, 
        ["Django", "MongoDB", "Javascript"], 
        [
            '5- Zethai/0.png',
            '5- Zethai/1.png',
            '5- Zethai/2.png',
            '5- Zethai/3.png',
            '5- Zethai/4.png',
            '5- Zethai/5.png',
            '5- Zethai/6.png',
            '5- Zethai/7.png',
            '5- Zethai/8.png',
            '5- Zethai/9.png',
            '5- Zethai/10.png',
            '5- Zethai/11.png',
            '5- Zethai/12.png',
            '5- Zethai/13.jpg',
            '5- Zethai/14.png',
        ], 
        'https://zethai.com/',
        false),

    new Project(3, 'SchoolAdmin', 
        `I build this project from scratch following a client's requirements. It is a school management system,
        with Student, Teacher, Principal and Parent users roles. Functionalities: managing homeworks and classes, 
        generating reports and invoices, uploading and sharing files and real-time private chat between users.`, 
        ['Django', 'SQLite', 'AJAX', 'Bootstrap Theme'], 
        [
            '6- SchoolAdmin/1.png',
            '6- SchoolAdmin/2.png',
            '6- SchoolAdmin/3.png',
            '6- SchoolAdmin/4.png',
            '6- SchoolAdmin/5.png',
            '6- SchoolAdmin/6.png',
            '6- SchoolAdmin/7.png',
            '6- SchoolAdmin/8.png',
            '6- SchoolAdmin/9.png',
            '6- SchoolAdmin/10.png',
            '6- SchoolAdmin/11.png',
            '6- SchoolAdmin/12.png',
            '6- SchoolAdmin/13.png',
            '6- SchoolAdmin/14.png',
            '6- SchoolAdmin/15.png',
            '6- SchoolAdmin/16.png',
            '6- SchoolAdmin/17.png',
            '6- SchoolAdmin/18.png',
            '6- SchoolAdmin/19.png',
            '6- SchoolAdmin/20.png',
            '6- SchoolAdmin/21.png',
            '6- SchoolAdmin/22.png',
            '6- SchoolAdmin/23.png',
            '6- SchoolAdmin/24.png',
            '6- SchoolAdmin/25.png',
            '6- SchoolAdmin/26.png',
            '6- SchoolAdmin/27.png',
            '6- SchoolAdmin/28.png',
            '6- SchoolAdmin/29.png',
            '6- SchoolAdmin/30.png',
            '6- SchoolAdmin/31.png',
            '6- SchoolAdmin/32.png',
            '6- SchoolAdmin/33.png',
            '6- SchoolAdmin/34.png',
            '6- SchoolAdmin/35.png',
        ], 
        false,
        false),

    new Project(4, 'Loopresource', 
        `This website is meant to connect grocers, farmers and charities so that the unsaleable food of the first ones
        can be seized by who might need it. I was hired as a collaborator and added a few features to it.`, 
        ["Django", "UNITesting", "Javascript"], 
        [
            '7- Loopresource/0.png',
            '7- Loopresource/1.png',
            '7- Loopresource/2.png'
        ], 
        'https://loopresource.ca/',
        false),

    new Project(5, 'CWN', 
        `Cyber Warrior network is a web application where people interested in landing in 
        a job related to cybersecurity can create a profile and play a game (CyberWraith), where 
        they can prove their skills on the subject, obteining a certain score. You can also create a profile
        as an employer, and look for candidates having as a reference their statistics in the game and more
        professional information (CV, position wanted, etc). I was employed to integrate a new theme to the website,
        and adding some other small functionalities.`, 
        ["Django"], 
        [
            '8- CWN/0.png',
            '8- CWN/1.png',
            '8- CWN/2.png',
            '8- CWN/3.png',
            '8- CWN/4.png',
            '8- CWN/5.png',
            '8- CWN/6.png',
            '8- CWN/7.png',
            '8- CWN/8.png',
            '8- CWN/9.png',
            '8- CWN/10.png',
            '8- CWN/11.png',
            '8- CWN/12.png'

        ], 
        'https://www.cyberwarriornetwork.com/',
        false),

    new Project(6, 'Famatel', 
        `Famatel is an electrical materials company, and they have a large database with more than 50 tables, where
        they add, edit and update data constantly. I was called on to make a friendly user interface for daily tasks 
        that require CRUD queries to the database, that before where made directly on the DB's interface. Each user had
        access to some functions, that included reading .xlsx files and update or read information according to them 
        from the dtabase, and then results are displayed on the screen.`, 
        ["PHP", "Oracle", "Javascript", "jQuery", "AJAX"], 
        [
            '9- Famatel/1.png',
            '9- Famatel/2.png',
        ], 
        false,
        false),
        new Project(7, 'Clit', 
        `I was hired for this project to build a web application that creates configuration files for network devices 
        using templates. Basically, there is a python script connected to a database with the necessary information for
        the templates, and I made a user interface to parse the parameters needed so as to generate it (city, template name, etc),
        that before where parsed from the console. Once the config file is generated, user can see it displayed, and has options to 
        copy or download it. The application also allows to create new records in the databse for different citys 
        and new templates, with a built in text editor with the client's preferences (for instance, conditionals highlighted).`, 
        ["Python", "Flask", "CSV", "Javascript"], 
        [
            '11- Clit/0.png',
            '11- Clit/1.png',
            '11- Clit/2.png',
            '11- Clit/3.png',
            '11- Clit/4.png',
            '11- Clit/5.png',
            '11- Clit/6.png',
            '11- Clit/7.png',
            '11- Clit/8.png',
            '11- Clit/9.png',
        ], 
        false,
        false),
    
        new Project(8, 'Bookshelf', 
        `In this CRUD application users login and can search and save books, with Google Books API called Asynchronously (AJAX).
        The purpose is to create a virtual bookshelf where you keep a register about books you read or want to read, and organize them in categories and status to filter them later.`, 
        ["Flask", "PostgreSQL", "AJAX", "API REST"], 
        [
            '3- Bookshelf/0.png',
            '3- Bookshelf/1.png',
            '3- Bookshelf/2.png',
            '3- Bookshelf/3.png',
            '3- Bookshelf/4.png',
            '3- Bookshelf/5.png',
            '3- Bookshelf/6.png',
            '3- Bookshelf/7.png',
            '3- Bookshelf/8.png',
            '3- Bookshelf/9.png',
            '3- Bookshelf/10.png',
            '3- Bookshelf/11.png',
            '3- Bookshelf/12.png',
            '3- Bookshelf/13.png',
        ],
        false, 
        'https://github.com/matildegarelik/bookshelf'),


    new Project(9, 'Manual CB Upload', 
        `A client contact me and gave me a python script that processed CSV files. I had to develop from scratch
        a Flask application to make a browser interface to upload the files, select other processing options and then
        display results that before where printed to the console. I also deployed it to Google Cloud App Engine`, 
        ["Flask", "Goougle Cloud", "CSV", "Javascript", "Mongo DB"], 
        [
            '10- Cb/1.png',
            '10- Cb/2.png',
            '10- Cb/3.png',
            '10- Cb/4.png',
        ], 
        'https://cb-src-dst.uc.r.appspot.com/',
        false),

    

       
    new Project(10, 'Gestion pedidos', 
        `This project consists of a system for managing the delivery of orders made by clients 
        (on the same site, logged in as a different type of user), that can choose from a list of products to buy. 
        Once the order is created, the employees at the storage department receive the information to prepare it, 
        and when they do they change the order status to ready to be delivered and the stock of the products on the 
        database automatically updates. Then, the administrator assigns company vans to an employee for the shipping 
        of a set of orders and a date. When an order is handed over the client, it's status changes again. I was hired 
        to develop this project from scratch, with a complete list of requirements for each user role and all of their 
        functions, as well as a entity relationship diagram of the database, that has tables for products, orders, clients 
        and deliveries. It was a chellenging job since it had to be started and finished within one day, that is why design is poor.`, 
        ["Django", "SQLite"], 
        [
            '12- Gestion pedidos/0.png',
            '12- Gestion pedidos/1.png',
            '12- Gestion pedidos/2.png',
            '12- Gestion pedidos/3.png',
            '12- Gestion pedidos/4.png',
            '12- Gestion pedidos/5.png',
            '12- Gestion pedidos/6.png',
            '12- Gestion pedidos/7.png',
            '12- Gestion pedidos/8.png',
            '12- Gestion pedidos/9.png',
            '12- Gestion pedidos/13.png',
            '12- Gestion pedidos/14.png',
            '12- Gestion pedidos/10.png',
            '12- Gestion pedidos/11.png',
            '12- Gestion pedidos/12.png',

        ], 
        false,
        'https://github.com/matildegarelik/gestion_pedidos'),

    new Project(11, 'TO DO App', 
        "As a personal project, I made this CRUD application where you can create a list of chores to do, with categories and possibility to change status. User registration and login system included.", 
        ["APACHE", "PHP", "MySQL"], 
        [
            '2- To do app/0.png',
            '2- To do app/1.png',
            '2- To do app/2.png',
            '2- To do app/3.png',
            '2- To do app/4.png',
            '2- To do app/5.png',
            '2- To do app/6.png',
            '2- To do app/7.png',
            '2- To do app/8.png',
            '2- To do app/9.png',
            '2- To do app/10.png',
            '2- To do app/11.png',
            '2- To do app/12.png',
            '2- To do app/13.png',
            '2- To do app/14.png',
        ],
        false, 
        'https://github.com/matildegarelik/toDoApp'),

    

    new Project(12, 'Posty', 
        `I developed this web application as part of a Laravel course. Basically you can create users, login, 
        and post things that are avaiable to all users (similarly to twitter). They load on real time and other users can like and unlike these posts.`,
        ['Laravel', 'MySQL', 'Tailwind CSS'],
        [
            '4- Posty/0.jpg',
            '4- Posty/1.png',
            '4- Posty/2.png',
            '4- Posty/3.png',
            '4- Posty/4.png',
            '4- Posty/5.png'
        ],
        false, 
        'https://github.com/matildegarelik/posty')

    //Chatcord???
]
