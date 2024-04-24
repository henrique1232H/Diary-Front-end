/* eslint-disable react/prop-types */
import { Container, Paragraph, Title } from "./style";

export default function Diary({props}) {


    return (
        <Container>

            <Title>
                <h2>
                    {props.title}
                </h2>
                <span>aa</span>
            </Title>

            <Paragraph>{props.paragraph}</Paragraph>
            
        </Container>
    )
}