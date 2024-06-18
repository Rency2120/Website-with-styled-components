import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { useGlobalContext } from '../Context'


function MainSection() {
  const {name,image} = useGlobalContext();
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-main-data">
                    <p className='main-top-data'>THIS IS ME</p>
                    <h1 className='main-heading'>{name}</h1>
                    <p className='main-para'>I'm Rency Sakhareliya. I am passionate Front-End Developer with skillfulness in HTML, CSS, Js ,Bootstrap, ReactJs and MySQl </p>
                    <Button className='btn hireme-btn'>
                        <NavLink to='/contact'>Hire Me</NavLink>
                    </Button>
                </div>

                <div className="section-main-image">
                    <picture>
                        <img src={image} alt="" className='main-img' />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
 padding: 90px 0;

.section-main-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 160px;
}

.main-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.helper};
}

.main-heading {
  text-transform: uppercase;
  ${'' /* font-size: 64px; */}
}

.main-para {
  margin-top: 15px;
  margin-bottom: 34px;
  max-width: 600px;
}

.section-main-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

picture {
  text-align: center;
}

.main-img {
  max-width: 80%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 72px;
  }
}
`

export default MainSection
