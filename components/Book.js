import styled from 'styled-components'

export default function Book({title, author, pages, link}){
    return <BookWrapper>
        <h1>{title}</h1>
        <h2> by {author}</h2>
        <p>Number of Pages: {pages}</p>
        <a href={link}> Learn More</a>
    </BookWrapper>
}

const BookWrapper = styled.article`
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    border: 2px solid black;
    background-color: #29436e;
    border-radius: 15px;
    width:450px;
    gap:10px;
    /* border-radius: 5px; */
    padding: 10px;
    transition: all 0.2s ease-in-out;
    :hover{
        /* background-color: #f5f5f5; */
        transform: scale(1.05);
    }
`
