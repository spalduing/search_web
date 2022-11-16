import React from 'react';

import Search from "./search/Search";

const Layaout = () => {

    return (
        <section className="main-section">
            <article className="title">
                <h1>Search Web App</h1>
            </article>
            <article className="content">
                <Search />
            </article>
        </section>
    );
}

export default Layaout;