import React, { useState } from "react";
import Popup from "reactjs-popup";
import { dataBase } from "../firebase";

// to know :  ref
//props ;; postid
const MyPostDeletePopup = (props) => {
  const [pw, setPW] = useState("");
  const handleChange = (e) => {
    setPW(e.target.value);
  };
  let postKey;
  dataBase
    .ref("posts/")
    .orderByChild("id")
    .equalTo(props.postid)
    .on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        postKey = snap.key;
      });
    });
  console.log(postKey);
  return (
    <div>
      <Popup
        trigger={<div className="post-delete-button"> Delete </div>}
        modal
        closeOnDocumentClick
      >
        {(close) => (
          <div className="modal">
            <div className="close" onClick={close}>
              {" "}
              &times;
            </div>
            <div> input password to delete </div>
            <input value={pw} onChange={handleChange} />
            <div
              className="modal-delete-button"
              onClick={() => {
               
              }}
            >
              Delete!
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default MyPostDeletePopup;
