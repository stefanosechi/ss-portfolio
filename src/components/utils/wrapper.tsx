import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="w-full lg:max-w-screen-lg lg:mx-auto px-4 h-full">
            {children}
        </section>
    )
};

export default Wrapper;
