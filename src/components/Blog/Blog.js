import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blog = () => {
    return (
        <div>
            <PageTitle title="Blog" />
            <Navbar />
            <div className='w-4/5 mx-auto h-[80vh] mb-72 md:mb-0'>
                <div className='my-5'>
                    <h1 className='text-xl font-semibold'>Difference between JavaScript vs NodeJS</h1>
                    <ul>
                        <li>1. JavaScript is a programming language &amp; NodeJS is javaScript runtime</li>
                        <li>2. JavaScript executes on browser engine &amp; NodeJS is a c++ programming language.</li>
                        <li>3. JavaScript has no access on system &amp; NodeJS has full access on system machine.</li>
                        <li>4. JavaScript is a scripting language to interact with html &amp; NodeJS is the runtime for run js outside any browser computer.</li>
                        <li>5. JavaScript runs on browser engine &amp; NodeJS is v8 engine, it help to parse js code.</li>
                    </ul>
                </div>
                <div className='my-5'>
                    <h1 className='text-xl font-semibold'>When to use NodeJS &amp; MongoDB</h1>
                    <ul>
                        <li>1. If there is no cpu insesive high perfomence task NodeJS easily can  be used. When there are asynchronous task like fetich data from database or another server NodeJS is perfect. When using NoSQL database like mongodb NodeJS is can be used.
                        </li>
                        <li>2. If we need document database, mongodb is can be used. It uses a JSON-like format to store document. Mongodb quicly solves scale Mongodb was built for people building internet and business applications who need to evolve quickly and scale elegantly
                        </li>
                    </ul>
                </div>
                <div className='my-5'>
                    <h1 className='text-xl font-semibold'>Differecne between SQL &amp; NoSQL</h1>
                    <ul>
                        <li>1. If there is no cpu insesive high perfomence task NodeJS easily can  be used. When there are asynchronous task like fetich data from database or another server NodeJS is perfect. When using NoSQL database like mongodb NodeJS is can be used.
                        </li>
                        <li>2. If we need document database, mongodb is can be used. It uses a JSON-like format to store document. Mongodb quicly solves scale Mongodb was built for people building internet and business applications who need to evolve quickly and scale elegantly
                        </li>
                    </ul>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default Blog;