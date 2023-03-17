import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './styles.css';
import SearchBar from '../../components/Home/SearchBar';
const ProductDetail = () => {
    const imgs = [
        { id: 0, value: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
        { id: 1, value: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" },
        { id: 2, value: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 3, value: "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320" },
    ]

    const [img, setImg] = useState(imgs[0])
    const handleClick = (index) => {
        console.log(index);
        const slider = imgs[index]
        setImg(slider)
    }

    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [selectimg, setSelectimg] = useState(product.image)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch(`http://fakestoreapi.com/products/${id}`)
            setSelectimg(await response.clone().json());
            setProduct(await response.json());
            setLoading(false)
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (<>Loading...</>)
    }


    const ShowProducts = () => {

        return (


            <>
                <Col className='image-price' style={{ textAlign: "center" }}>
                    <img className='img-detail' src={img.value} alt={product.title} />

                    <div className='flex-box'>
                        <div className='thumbnail'>
                            {imgs.map((data, i) => <img key={data.id} src={data.value} style={{ padding: "5px" }} onClick={() => handleClick(i)} height="70px" width="100px" />)}
                        </div>
                    </div>
                </Col>
                <Col className='name-price'>
                    <h5 className='product-name'>{product.title}</h5><hr />
                    <p className='product-price'>${product.price}</p>
                    <p className='rating'>
                        Rating {product.rating && product.rating.rate}
                        <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                    </p>
                    <Button style={{width:"100%"}} variant="dark">Go to Cart</Button>
                </Col>
            </>

        )
    }
    return (

        <>
            <SearchBar />
            <Row className="justify-content-around" style={{padding:"10px "}}>
                {loading ? <Loading /> : <ShowProducts />}
            </Row>
        </>

    );
}


export default ProductDetail;
