import { GetColorName } from 'hex-color-to-color-name';
import hexRgb from 'hex-rgb';

const Card = (props) => {
  const colorName = GetColorName(props.card.colorUser);
  // const UserName = props.card.nameUser;

  const userName = props.card.nameUser;

  const userNameComplete = userName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  return (
    <div className="container">
      <table border="1" className="line_title">
        <thead>
          <tr>
            <th>NOME</th>
            <th>COR ESCOLHIDA</th>
            <th>CÓDIGO HEXADECIMAL</th>
            <th>CÓDIGO RGB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{userName[0].toUpperCase() + userName.substring(1)}</td> */}
            <td>{userNameComplete}</td>
            <td style={{ background: (props.card.colorUser), color: 'white' }}>
              {colorName}
            </td>
            <td>{props.card.colorUser.toUpperCase()}</td>
            <td>{hexRgb(props.card.colorUser, { format: 'css' })}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card;
