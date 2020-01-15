import React from 'react';

const BookCard = (props) => {
    const { data, isDetailCard } = props;
    return (
        data ? (
            <div className="card">
                <img src={data['image-url']} className="card-img-top" alt={data['image-url']} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    {/* <p className="card-text">{data['sub-title']}</p> */}
                    {
                        isDetailCard && (
                            <React.Fragment>
                                <p className="card-text">{data['sub-title']}</p>
                                <p className="">{data.description}</p>
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        ) : <React.Fragment />
    );
}

export default BookCard;