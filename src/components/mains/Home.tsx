import styled from 'styled-components'

const StyledMain = styled.main`

    height: 50vh;
    width: calc(100% - 300px);
    margin: 0 auto;
    min-height: calc(100vh - 80px);
    text-align: center;

    h2 {
        margin: 25px 50px;
    }

    h4 {
        margin-top: 50px;
        margin-bottom: 10px;
        text-align: left;
        padding-left: 70px
    }

    p {
        margin: 50px;
    }

    img{
        display: block;
        height: 50%;
        width: auto;
        margin: 0 auto 1.5rem;
        border-radius: 10px;
    }

    @media (max-width: 1000px) {
        padding: 1rem;
        width: 100%;
        img {
            max-width: 90%;
            height: auto;
        }
        p {
            padding: 0 1rem;
        }
    }

`;

export default function Home() {
    return (
        <>
            <StyledMain>
                <title> Home | Victoria's Resume </title>
                    <h2>
                        Home
                    </h2>

                    {/* figure out how to fix image */}
                    <img src="src/assets/Muluget,Victoria.jpg" alt="Victoria Mulugeta"/>

                    <p>
                        My name is Victoria Mulugeta. I am a senior studying Computer Science at Boston University.
                        After I complete my studies I would like to start working in a Software Engineering role. However,
                        I am still considering continuing my education and possibly obtain my masters degree here at Boston
                        University.
                    </p>

                    <p>
                        Welcome to my website! Here you can find my projects, experience, and other information that might
                        be of interest to you.
                    </p>
            </StyledMain>
        </>
    )
}