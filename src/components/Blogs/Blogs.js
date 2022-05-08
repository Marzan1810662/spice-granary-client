import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='section-title my-4'>Blogs</h1>
            </div>
            <div className='container qna-container'>
                <div className=' qna-div'>
                    <h5>Q1. What is the difference between javascript and nodejs?</h5>
                    <p></p>
                </div>
                <div className='qna-div'>
                    <h5>Q2.  When should you use nodejs and when should you use mongodb?</h5>
                    <p>Node js is a javascript runtime environment that helps  to run javascript on serverside environment. It's commonly used to create web servers, but it may also be used to write a variety of other kinds of programming. Any project requires a programming environment and a runtime library that can build and/or interpret your code while also providing basic programming tools and support. You can use nodejs to write a Javascript standalone program or server.</p>
                    <p>MongoDB is a  database management system. It's a database that doesn't use SQL. If your application requires the capacity to save data so that it can be efficiently queried or updated later, you'll almost certainly need to use a database like mongodb.</p>
                </div>
                <div className='qna-div'>
                    <h5>Q3. What is the differences between sql and nosql databases?</h5>
                    <p></p>
                </div>
                <div className='qna-div'>
                    <h5>Q4. What is the purpose of jwt and how does it work?</h5>
                    <p>JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to share security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.
                        JWT is distinct from other web tokens in that it includes a set of claims. Claims are the key to information exchange between two parties. The nature of these claims is determined by the use case at hand. A claim could specify who issued the token, how long it is valid, or what permissions the client has been given.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;