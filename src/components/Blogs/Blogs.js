import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='section-title my-4 p-2'>Blogs</h1>
            </div>
            <div className='container qna-container'>
                <div className=' qna-div'>
                    <h5>Q1. What is the difference between javascript and nodejs?</h5>
                        <ul className='text-start mb-1'>
                            <li>Javascript is a programming language used for writing script on the website whereas NodeJs in a javascript runtime environment.</li>
                            <li>Javascript can mainly be used in clientside or browser whereas NodeJS gives javascript the ability to run on serverside.</li>
                            <li>Javascript is capable of adding html but NodeJS is not capable.</li>
                            <li>Javascript can run in browser engine like JS code,V8,Spidermonkey but V8 is the Javascript engine inside of node.js that parses and runs Javascript.</li>
                            <li>Javascript is theupgraded version of ECMA script that I written in C++.NodeJS is written in C, C++ and Javascript</li>
                            <li>avascript is used for frontend development whereas NodeJS is used for serverside development.</li>
                        </ul>
                </div>
                <div className='qna-div'>
                    <h5>Q2.  When should you use nodejs and when should you use mongodb?</h5>
                    <p>Node js is a javascript runtime environment that helps  to run javascript on serverside environment. It's commonly used to create web servers, but it may also be used to write a variety of other kinds of programming. Any project requires a programming environment and a runtime library that can build and/or interpret your code while also providing basic programming tools and support. You can use nodejs to write a Javascript standalone program or server.</p>
                    <p>MongoDB is a  database management system. It's a database that doesn't use SQL. If your application requires the capacity to save data so that it can be efficiently queried or updated later, you'll almost certainly need to use a database like mongodb.</p>
                </div>
                <div className='qna-div'>
                    <h5>Q3. What is the differences between sql and nosql databases?</h5>
                        <ul className='text-start'>
                            <li>SQL databases are relational database, but NoSQL databases are non-relational database.</li>
                            <li>SQL means structured query language, it is used in SQL databases and follow a predefined schema. NoSQL databases follows dynamic schemas for unstructured data.</li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>SQL databases are table-based, while NoSQL databases are document based.</li>
                            <li>SQL databases performs better in multi-row transactions, while NoSQL is better for unstructured data such as documents or JSON.</li>
                            <li>SQL database examples are MySQL, PostgreSQL, and Oracle etc.NoSQL database examples are MongoDB, CouchDB, CouchBase, Cassandra, HBase, Redis, Riak, Neo4J etc.</li>
                        </ul>
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