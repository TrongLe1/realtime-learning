import './Gallery.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react';
import { useState, useEffect } from 'react';
import {
    useQuery,
} from 'react-query'
import memesApi from '../../API/MemesApi'
import Navbar from '../Navbar'


//use to shuffle memeList
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Gallery() {
    const [memeList, setMemeList] = useState([]);
    const { data, refetch } = useQuery('memes', memesApi.getMemes);
    useEffect(() => {
        async function fetchData() {
            const data = await memesApi.getMemes();
            setMemeList(data.data.memes);
        }
        fetchData();
    }, []);

    const LoadImages = async () => {
        refetch();
        setMemeList(data.data.memes);
        return data;
    }

    const LoadRandomImages = async () => {
        refetch();
        setMemeList(shuffle(data.data.memes));
        return data;
    }

    var display = [];
    for (let i = 0; i < memeList.length - 3; i += 3) {
        let row = [];
        row.push(
            <Row key={i}>
                <Col>
                    <Image className='memeImage' alt={memeList[i].name} fluid key={memeList[i].id} src={memeList[i].url}></Image>
                </Col>
                <Col>
                    <Image className='memeImage' alt={memeList[i].name} fluid key={memeList[i + 1].id} src={memeList[i + 1].url}></Image>
                </Col>
                <Col>
                    <Image className='memeImage' alt={memeList[i].name} fluid key={memeList[i + 2].id} src={memeList[i + 2].url}></Image>
                </Col>
            </Row>
        );
        display.push(row)
    }


    return (
        <>
            <Navbar />
            <Container className='text-center'>
                <h1>Meme Gallery</h1>
                <Row>
                    <Col>
                        <Button onClick={() => LoadImages()}>Load Image</Button>{' '}
                        <Button onClick={() => LoadRandomImages()}>Load Random Image</Button>
                    </Col>
                </Row>
                {display}
            </Container>
        </>
    );
}

export default Gallery;