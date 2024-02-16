import Cam from "../img/cam.png";
import Add from "../img/cam.png";
import More from "../img/more.png";
import Messages from "./Message";
import Input from "./Input";
export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
          {/* comment */}
        </div>
      </div>
    </div>
  );
}
