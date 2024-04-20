import { Container, Paragraph, Title } from "./style";

export default function Diary(information) {


    return (
        <Container>

            <Title>
                <h2>
                    {information.diary.title}
                </h2>
                <span>aa</span>
            </Title>

            <Paragraph>{information.diary.paragraph}</Paragraph>
            
        </Container>
    )
}