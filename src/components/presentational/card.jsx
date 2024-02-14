import { Card, CardBody, CardFooter, CardText, CardTitle } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";


// style
import "./style.scss"
const CardComponent = ({data}) =>{
    const {title, count} = data
    return(
        <Card>
            <CardBody>
                <CardText>
                   {title}
                </CardText>
                <CardTitle>
                    {count}
                </CardTitle>
            </CardBody>
            <CardFooter>
                View more
                <FaArrowRight/>
            </CardFooter>
        </Card>
    )
}
export default CardComponent;