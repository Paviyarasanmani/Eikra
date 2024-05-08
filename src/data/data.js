import pythongCourseImg from '../Assets/images/courses/python.jpg';
import htmlCourseImg from '../Assets/images/courses/html.jpg';
import reactCourseImg from '../Assets/images/courses/react.jpg';
import nodeCourseImg from '../Assets/images/courses/node.jpg';
import jsImg from '../Assets/images/courses/js.jpg';
import angular from '../Assets/images/courses/angular.jpg';
import student1 from '../Assets/images/student1.png';
import student2 from '../Assets/images/student2.png';
import student3 from '../Assets/images/student3.png';
import student4 from '../Assets/images/student4.png';

const TopCourses = [
    {
        id: 1,
        name: "Learning Python for Data Analysis and Visualization",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, cupiditate!",
        rating: 4.5,
        author: "Daniel Lee",
        price: "35.00",
        isFavourite: false,
        image: pythongCourseImg
    },
    {
        id: 2,
        name: "HTML & CSS",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, cupiditate!",
        rating: 4.5,
        author: "Jackie Chan",
        price: "100.10",
        isFavourite: true,
        image: htmlCourseImg
    },
    {
        id: 3,
        name: "ReactJs Fundamental",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, cupiditate!",
        rating: 4,
        author: "Johny Depp",
        price: "135.00",
        isFavourite: false,
        image: reactCourseImg
    },
    {
        id: 4,
        name: "NodeJs Fundamental",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, cupiditate!",
        rating: 4.5,
        author: "Brandan Cooper",
        price: "353.00",
        isFavourite: false,
        image: nodeCourseImg,
    },
    {
        id: 5,
        name: "Learning Javascript for Fullstack Development",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, cupiditate!",
        rating: 4.5,
        author: "Abu Tahir",
        price: "501.00",
        isFavourite: true,
        image: jsImg,
    },
    {
        id: 6,
        name: "AngularJS Fundamental",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, cupiditate!`,
        rating: 4.5,
        author: "Paviyarasan",
        price: "134.00",
        isFavourite: true,
        image: angular,
    },
]

const studentQuotes = [
    {
        id: 1,
        name: "Tony Walker",
        role: "App Developer",
        quote: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Reiciendis aliquid voluptatem veniam assumenda accusamus
        ullam unde nam voluptates commodi culpa.`,
        image: student1
    },
    {
        id: 2,
        name: "Marshal Lee",
        role: "Web Developer",
        quote: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Reiciendis aliquid voluptatem veniam assumenda accusamus
        ullam unde nam voluptates commodi culpa.`,
        image: student2
    },
    // {
    //     id: 3,
    //     name: "Martin Guptin",
    //     role: "Software Developer",
    //     quote: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Reiciendis aliquid voluptatem veniam assumenda accusamus
    //     ullam unde nam voluptates commodi culpa.`,
    //     image: student3
    // },
    // {
    //     id: 4,
    //     name: "Marshal Lee",
    //     role: "Web Developer",
    //     quote: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Reiciendis aliquid voluptatem veniam assumenda accusamus
    //     ullam unde nam voluptates commodi culpa.`,
    //     image: student4
    // },
    // {
    //     id: 5,
    //     name: "Martin Guptin",
    //     role: "Software Developer",
    //     quote: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Reiciendis aliquid voluptatem veniam assumenda accusamus
    //     ullam unde nam voluptates commodi culpa.`,
    //     image: student3
    // },
    // {
    //     id: 6,
    //     name: "Marshal Lee",
    //     role: "Web Developer",
    //     quote: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Reiciendis aliquid voluptatem veniam assumenda accusamus
    //     ullam unde nam voluptates commodi culpa.`,
    //     image: student2
    // },
    // {
    //     id: 7,
    //     name: "Tony Walker",
    //     role: "App Developer",
    //     quote: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Reiciendis aliquid voluptatem veniam assumenda accusamus
    //     ullam unde nam voluptates commodi culpa.`,
    //     image: student1
    // },
]

export { TopCourses, studentQuotes }