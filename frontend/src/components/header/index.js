import { HeaderContainer } from './styles';
import logo from '../../assets/images/ingresso.png'

export default function Header(props) {
  return (
    <HeaderContainer descriptionOnTop={props.descriptionOnTop}>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="ingresso" />
        </div>
        <div className="title">
          CineMonk
        </div>
      </div>
      <div className="description">
        {props.description}
      </div>
    </HeaderContainer>
  )
}