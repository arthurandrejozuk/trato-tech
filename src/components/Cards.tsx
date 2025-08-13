import styled from "styled-components";

const Section = styled.div`
    position: relative;
    bottom: 200px;
    gap:32px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export default function Cards({children}:{children?: React.ReactNode}) {
    return (
        <Section>
          {children}
        </Section>
    )
}