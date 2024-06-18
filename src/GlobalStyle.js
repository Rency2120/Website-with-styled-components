import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Work Sans', sansserif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
body{
  overflow-x: hidden;
  
}

body::-webkit-scrollbar{
  width:15px
}

body::-webkit-scrollbar-track{
  background-color: rgb(24 24 29)
}

body::-webkit-scrollbar-thumb {
 background: #fff;
   border: 5px solid transparent;
   border-radius: 9px;
   background-clip: content-box;
}


h1{
    color: ${({ theme }) => theme.colors.heading};
    font-size:60px;
    font-weight:900;
}
h2{
    color: ${({ theme }) => theme.colors.heading};
    font-size:44px;
    font-weight:900;
    white-space: normal;
    text-align: center;
}
h3 {
  font-size: 18px;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 16.5px;
  line-height: 1.5;
  margin-top: 10px;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 90px;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.common-heading {
      font-size: 38px;
      font-weight: 600;
      margin-bottom: 60px;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 500px;
    color: ${({ theme }) => theme.colors.black};
    padding: 16px 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 160px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 14px 22px;
    border-style: solid;
    border-width: 1px;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    }
@media (max-width:${({ theme }) => theme.media.tab}){
  h1{
    font-size:40px;
  }
  .container{
    padding: 0 32px;
  }
  .grid-three-column {
      grid-template-columns: 1fr 1fr;
  }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {

html{
  font-size: 50%;
}

.grid{
  gap: 32px;
}

.grid-two-column, .grid-three-column, .grid-four-column{
  grid-template-columns: 1fr;
}
}
`