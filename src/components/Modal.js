import styled from '@emotion/styled/macro'


const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  inset: 0;
  background: rgba(0, 0, 0, .5);
  transition: all .2s;
  z-index: 99;
  user-select: none;
  animation: zoom-in 1s;
`

const Modal = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)


export default Modal
