import styled from 'styled-components';

export const Section = styled.div`
display:flex;
flex:1;
/* max-width:1260px; */
margin:auto;
position:relative;

`
export const ImageOverlay = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
right:0;
background-color:#525151;
opacity:0.05;
z-index:-1;
`

export const ImageTextContainer = styled.div`
position:absolute;
width:67%;
left:0;
font-size:120px;
color:White;
font-weight:bold;
background-color:rgba(77,66,61,0.5);
padding:80px 50px;
z-index:3;
/* opacity:0.65; */
display:flex;
justify-content:flex-end;
top: 20%;
border-radius:0px 250px 250px 0px;
`
export const Section1A = styled.div`
background-image :url(${props=>props.src});
background-size:cover;
background-position:center;
background-repeat:no-repeat;
flex:0.8;
min-height:95vh;
position:relative;
z-index:1;
filter:saturate(1.5);
` 
export const Section1B = styled.div`
flex:0.2;
background-color:#fc3903;
`
export const FloatingFormContainer = styled.div`
position:absolute;
right:6%;
top:10%;
width:540px;
height:fit-content;
z-index:5;
background:white;
color:black;
/* border:1px solid black; */
height:640px;
`
export const Form = styled.form`

`
