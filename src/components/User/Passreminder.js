import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Passreminder() {
  return (
    <nav className="userPassreminder">
      <div className="userPassreminder_content">
        <div className="userPassreminder_part">
          <div className="userPassreminder_part_title">
            <div></div>
            <p>パスワードリマインダー</p>
          </div>

          <div className="userPassreminder_part_text">
            <p>パスワードを忘れてしまった方は、登録時のメールアドレスを入力しリマインダーメールを受信してください。</p>
          </div>

          <div className="userPassreminder_part_emailTrans">
                <p>登録時のメールアドレス</p>
                <input></input>
          </div>

          <div className="userPassreminder_part_btngroup">
            <Link to="/">
              <button className="userPassreminder_part_back">
                戻る
              </button>
            </Link>

            <Link to="/user/passInform">
              <button className="userPassreminder_part_receive">
                リマインダーメールを受信する
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Passreminder;
