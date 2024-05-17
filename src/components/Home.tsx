import React, { FC } from 'react';

type HomeProps = {
    name: string
}

const Home = ({ name }: HomeProps) => {
    return <div>Hello {name}!</div>
}

export default Home;