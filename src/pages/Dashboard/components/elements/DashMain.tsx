import { useEffect, useState } from 'react';
import '../../styles/dashmain.scss';
// import '../../styles/dashmain_responsiveness.scss';
import { DashCard, DashDetails, DashNav } from './index';

function DashMain()
{

    // For Querying

    const [ search, setSearch ] = useState("");
    const [ apiQuery, setApiQuery ] = useState("");
    const [ show, setShow ] = useState(false);

    useEffect(() =>
    {
        const timeoutId = setTimeout(() =>
        {
            setApiQuery(search);
        }, 500);

        return () =>
        {
            clearTimeout(timeoutId)
        };
    }, [ search ])

    const handleSearch = (e: any) =>
    {
        setShow(!show);

        setSearch(e.target.value);
    }


    const handleSubmit = (e: any) =>
    {
        e.preventDefault();
        setApiQuery(search);
        setSearch("");
    }
    return (  
        <section className="lendsqr__page__content">
            <DashNav handleSearch={handleSearch} handleSubmit={handleSubmit} search={search} />
            <main className="lendsqr__main">
                <div className="lendsqr__main__content__header">
                    <div className="lendsqr__main__content__header__title">
                        <span>Users</span>
                    </div>
                    <DashCard />
                </div>
                <DashDetails />

                {apiQuery}


            </main >

        </section>



    );
}

export default DashMain;
