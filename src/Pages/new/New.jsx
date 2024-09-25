import React, { useState } from "react";
import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {

    const [file, setFile] = useState("")

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-camera-icon-png-image_696326.jpg" }
              alt=""
              className=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  {" "}
                  Image : <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={e => setFile(e.target.files[0]) }
                  style={{
                    display: "none",
                  }}
                />
              </div>
            
              {inputs.map((input, id) => (
                <div className="formInput" key={id} >
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
