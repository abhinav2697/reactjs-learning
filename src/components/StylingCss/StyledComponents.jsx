import styled from 'styled-components';
const StyledDiv = styled.div`
color:green;
font-size:18px;
border:1px solid black;
backgroundColor:blue`;

const StyledComponents = () => {
    return (
        <StyledDiv>
            This component is styled using Styled Components.
        </StyledDiv>
    )
}


export default StyledComponents;