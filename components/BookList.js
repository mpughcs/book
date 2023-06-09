import styled from "styled-components"
import Book from "./Book"

//takes in all the books
export default function BookList({ books }) {
    return <Wrapper>
    { books.map(b => <Book title={b.title} author={b.author} link={b.link} pages={b.pages} />) }
    </Wrapper>
}

const Wrapper = styled.div`
    /* padding-top: 2000px; */
    /* margin: 0 auto; */
    /* padding: 10px; */
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;

`